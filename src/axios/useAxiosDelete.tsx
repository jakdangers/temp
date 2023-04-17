import { useCallback, useState } from 'react';
import { AxiosError, AxiosInstance } from 'axios';

export default function useAxiosDelete<TParams>(
  axiosInstance: AxiosInstance,
  url: string,
  initialParams: TParams | null = null
): [() => Promise<void>, number | null, boolean, AxiosError | null] {
  const [data, setData] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const deleteData = useCallback(
    async (params: TParams | null = null) => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.delete(url, {
          params: {
            params: params ? { ...params } : undefined,
          },
        });
        setData(response.status);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstance, url]
  );

  const sendRequest = useCallback(async () => {
    await deleteData(initialParams);
  }, [deleteData, initialParams]);

  return [sendRequest, data, isLoading, error];
}
