import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col justify-between p-20`}>
      <div>
        <p className="mb-3">Front page</p>
        <Link href="/customer" className="text-blue-600 underline">
          Visit Customer
        </Link>
      </div>
    </main>
  );
}
