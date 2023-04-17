import { useEffect, useState } from 'react';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CancelTokenSource,
} from 'axios';

import { useDebounce } from '../hook/useDebounce';

export default function useAxiosGetOnType<TParams, TResponse = object>(
  axiosInstance: AxiosInstance,
  url: string,
  initialParams: TParams,
  initialData: TResponse | null,
  debounceTime = 500
): [
  TResponse | null,
  boolean,
  AxiosError | null,
  (searchTerm: TParams) => void
] {
  const [data, setData] = useState<TResponse | null>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [params, setParams] = useState<TParams | null>(null);
  const [cancelTokenSource, setCancelTokenSource] =
    useState<CancelTokenSource | null>(null);

  const debouncedParams = useDebounce(params, debounceTime);

  useEffect(() => {
    if (debouncedParams === null) {
      return;
    }
    setIsLoading(true);
    const source = axios.CancelToken.source();
    setCancelTokenSource(source);
    const fetchData = async () => {
      try {
        const response: AxiosResponse<TResponse> = await axiosInstance.get(
          url,
          {
            params: {
              ...debouncedParams,
            },
            cancelToken: source.token,
          }
        );
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          return;
        }
        if (err instanceof AxiosError) {
          setData(null);
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line consistent-return
    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel('Request cancelled.');
      }
    };
  }, [axiosInstance, url, debouncedParams]);

  const handleSearchTermChange = (searchTerm: TParams) => {
    setParams(searchTerm);
  };

  return [data, isLoading, error, handleSearchTermChange];
}
