import { getProjectById } from "@/actions/project.actions";
import { createFeedback } from "@/actions/feedback.actions";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const avgRating =
    project.feedbacks.length > 0
      ? (
          project.feedbacks.reduce(
            (acc, feedback) => acc + feedback.rating,
            0
          ) / project.feedbacks.length
        ).toFixed(1)
      : "No ratings";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border rounded-lg p-6">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold">
            {project.name}
          </h1>

          <span className="px-3 py-1 border rounded text-sm">
            {project.category}
          </span>
        </div>

        <p className="text-gray-600 mt-4">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-4 inline-block"
        >
          Visit Project →
        </a>

        <div className="mt-6 flex gap-6 text-sm text-gray-600">
          <p>
            Average Rating: <strong>{avgRating}</strong>
          </p>

          <p>
            Feedback Count:{" "}
            <strong>{project.feedbacks.length}</strong>
          </p>
        </div>
      </div>

      <div className="mt-10 border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Give Feedback
        </h2>

        <form
          action={createFeedback}
          className="space-y-4"
        >
          <input
            type="hidden"
            name="projectId"
            value={project.id}
          />

          <select
            name="rating"
            className="w-full border p-3 rounded"
            required
          >
            <option value="">Select Rating</option>
            <option value="1">1 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="5">5 ⭐</option>
          </select>

          <textarea
            name="strengths"
            placeholder="What did you like about this project?"
            className="w-full border p-3 rounded"
            rows={4}
            required
          />

          <textarea
            name="improvements"
            placeholder="What can be improved?"
            className="w-full border p-3 rounded"
            rows={4}
            required
          />

          <button
            type="submit"
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Feedback History
        </h2>

        {project.feedbacks.length === 0 ? (
          <div className="border rounded-lg p-6 text-gray-500">
            No feedback yet.
          </div>
        ) : (
          <div className="space-y-4">
            {project.feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="border rounded-lg p-4"
              >
                <p className="font-semibold">
                  ⭐ Rating: {feedback.rating}/5
                </p>

                <p className="mt-3">
                  <span className="font-semibold">
                    Strengths:
                  </span>{" "}
                  {feedback.strengths}
                </p>

                <p className="mt-3">
                  <span className="font-semibold">
                    Improvements:
                  </span>{" "}
                  {feedback.improvements}
                </p>

                <p className="text-xs text-gray-500 mt-4">
                  {new Date(
                    feedback.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}