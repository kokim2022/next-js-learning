import useSWR from "swr";

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

export default function About() {
  const { data, error } = useSWR("/api/about", fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="text-center text-2xl text-red-600">
      <h1>{data.name}</h1>
    </div>
  );
}
