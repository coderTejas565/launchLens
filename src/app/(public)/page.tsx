import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <section className="text-center">
        <h1 className="text-5xl font-bold">
          LaunchLens
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Submit your project and get
          actionable feedback from builders.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/projects"
            className="border px-4 py-2 rounded"
          >
            Browse Projects
          </Link>

          <Link
            href="/dashboard/new"
            className="border px-4 py-2 rounded"
          >
            Submit Project
          </Link>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="border p-6 rounded">
            <h3 className="font-semibold">
              1. Submit Project
            </h3>
            <p className="mt-2 text-gray-600">
              Add your project details and URL.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold">
              2. Share It
            </h3>
            <p className="mt-2 text-gray-600">
              Let builders discover your work.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold">
              3. Get Feedback
            </h3>
            <p className="mt-2 text-gray-600">
              Receive ratings and improvement suggestions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}