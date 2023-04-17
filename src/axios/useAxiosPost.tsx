import { useState } from 'react';
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

export default function useAxiosPost<TRequest, TResponse = object>(
  axiosInstance: AxiosInstance,
  url: string,
  initialData: TResponse | null = null
): [TResponse | null, boolean, AxiosError | null, (data: TRequest) => void] {
  const [data, setData] = useState<TResponse | null>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const sendData = async (dataToSend: TRequest) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse<TResponse> = await axiosInstance.post(
        url,
        dataToSend
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

  return [data, isLoading, error, sendData];
}
