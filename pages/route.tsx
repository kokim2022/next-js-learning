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
      <div className="flex justify-center text-2xl items-center h-screen">
        <div>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/post/123">My Blog Post</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
