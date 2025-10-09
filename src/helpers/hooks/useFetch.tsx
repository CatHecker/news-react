import { useEffect, useState } from "react";

export const useFetch = <TData, TParams>(
  fetchFunction: (params: TParams) => Promise<TData>,
  params: TParams
) => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await fetchFunction(params);

        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchFunction, stringParams]);

  return { data, isLoading, error };
};
