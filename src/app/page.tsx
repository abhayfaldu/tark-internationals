import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Hello there Home</h1>
        <Link href="/hello">Hello Page</Link>
      </div>
    </div>
  );
}
