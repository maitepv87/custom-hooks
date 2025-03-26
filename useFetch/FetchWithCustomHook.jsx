import { useFetch } from "./useFetch";

export const FetchWithCustomHook = () => {
  const { data, isLoading, hasError, error } = useFetch(
    "https://api.example.com/data"
  );

  if (isLoading) return <p>Loading...</p>;
  if (hasError) return <p>{error}</p>;

  return (
    <div>
      <h3>Fetched Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
