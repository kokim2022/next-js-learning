import { useRouter } from "next/router";

// if we navigate to localhost:3000/post/123...
export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>; // ...you'll see "Post: 123"
}
