"use client";

export default function Error({ error, reset, }: {error: Error; reset: () => void }) {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4">
        {error.message}
      </p>

      <button onClick={reset} className="mt-4 border px-4 py-2">
        Try Again
      </button>
    </div>
  );
}