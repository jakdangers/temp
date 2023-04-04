import { useEffect, useState } from 'react';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export function useAxiosGetOnLoad<TResponse, TParams = {}>(
  axiosInstance: AxiosInstance,
  url: string,
  initialParams: TParams | null = null,
): [TResponse | null, boolean, AxiosError | null] {
  const [data, setData] = useState<TResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<TResponse> = await axiosInstance.get(
          url,
          {
            params: initialParams ? { ...initialParams } : undefined,
          },
        );
        setData(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          setData(null);
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [axiosInstance, url, initialParams]);

  return [data, isLoading, error];
}
