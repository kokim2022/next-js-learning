import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About | My Cool Site</title>
        <meta
          name="description"
          content="You really need to read this website because it's made with Next.js"
        />
      </Head>
      <h1>About Me</h1>
      <div>
        <Link href="/">Home</Link>
        <Link href="/post/123">My Blog Post</Link>
      </div>
    </div>
  );
}
