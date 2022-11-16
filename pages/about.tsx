import Link from "next/link";
import { useEffect, useState } from "react";

interface Person {
  name: string;
}

export default function About() {
  const [data, setData] = useState<Person>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/about")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No about data</p>;

  return (
    <div className="text-xl">
      <div>My name is: {data.name}</div>
    </div>
  );
}
