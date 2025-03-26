import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
    error: null,
  });

  const getFetch = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching data");

      const data = await response.json();

      setState({ data, isLoading: false, hasError: false, error: null });
    } catch (error) {
      setState({ data: null, isLoading: false, hasError: true, error });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    error: state.error,
  };
};
