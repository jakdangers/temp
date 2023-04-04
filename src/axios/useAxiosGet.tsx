import { useCallback, useState } from 'react';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export function useAxiosGet<TResponse, TParams = {}>(
  axiosInstance: AxiosInstance,
  url: string,
  initialParams: TParams | null = null,
): [() => Promise<void>, TResponse | null, boolean, AxiosError | null] {
  const [data, setData] = useState<TResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(
    async (params: TParams | null = null) => {
      console.log(params);
      //   setIsLoading(true);
        try {
          const response: AxiosResponse<TResponse> = await axiosInstance.get(
            url,
            {
              params: {
                ...params,
              },
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
      },
    [axiosInstance, url],
  );

  const sendRequest = useCallback(async () => {
    await fetchData(initialParams);
  }, [fetchData, initialParams]);

  return [sendRequest, data, isLoading, error];
}
