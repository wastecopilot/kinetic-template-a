import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl sm:text-6xl">we couldn&apos;t find that page</h1>
        <p className="mt-4 text-lg">The page may have moved. Head back to the home page to keep browsing.</p>
        <p className="mt-8">
          <Link href="/" className="inline-block min-h-12 rounded-lg bg-navy px-6 py-3 font-black text-white hover:bg-purple">
            Go to the home page
          </Link>
        </p>
      </div>
    </section>
  );
}
