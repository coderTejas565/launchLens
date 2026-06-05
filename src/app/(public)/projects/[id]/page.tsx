import { getProjectById } from "@/actions/project.actions";
import { createFeedback } from "@/actions/feedback.actions";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProjectById(id);

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
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-[#F8FAFC]">
      {/* Project Header Card */}
      <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-8 shadow-sm">
        <div className="flex justify-between items-start gap-4">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            {project.name}
          </h1>

          <span className="px-3 py-1 bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] text-sm font-medium rounded-full shrink-0">
            {project.category}
          </span>
        </div>

        <p className="text-[#64748B] mt-4 leading-relaxed text-base">
          {project.description}
        </p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B35] hover:text-[#E85A2A] font-semibold mt-6 transition-colors group"
        >
          Visit Project 
          <span className="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>

        <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex gap-8 text-sm">
          <p className="text-[#64748B]">
            Average Rating: <strong className="text-[#0F172A] text-base ml-1">{avgRating} {avgRating !== "No ratings" && "⭐"}</strong>
          </p>

          <p className="text-[#64748B]">
            Feedback Count: <strong className="text-[#0F172A] text-base ml-1">{project.feedbacks.length}</strong>
          </p>
        </div>
      </div>

      {/* Give Feedback Form Section */}
      <div className="mt-8 border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-8 shadow-sm">
        <h2 className="text-xl font-bold text-[#0F172A] mb-6">
          Give Feedback
        </h2>

        <form
          action={createFeedback}
          className="space-y-5"
        >
          <input
            type="hidden"
            name="projectId"
            value={project.id}
          />

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
              Rating
            </label>
            <select
              name="rating"
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all appearance-none cursor-pointer"
              required
            >
              <option value="">Select Rating</option>
              <option value="1">1 ⭐</option>
              <option value="2">2 ⭐</option>
              <option value="3">3 ⭐</option>
              <option value="4">4 ⭐</option>
              <option value="5">5 ⭐</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
              Strengths
            </label>
            <textarea
              name="strengths"
              placeholder="What did you like about this project?"
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg placeholder-[#64748B]/60 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all resize-y"
              rows={4}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
              Improvements
            </label>
            <textarea
              name="improvements"
              placeholder="What can be improved?"
              className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg placeholder-[#64748B]/60 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all resize-y"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            Submit Feedback
          </button>
        </form>
      </div>

      {/* Feedback History Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-[#0F172A] mb-6">
          Feedback History
        </h2>

        {project.feedbacks.length === 0 ? (
          <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-8 text-center text-[#64748B] shadow-sm">
            No feedback yet. Be the first to leave your thoughts!
          </div>
        ) : (
          <div className="space-y-4">
            {project.feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-6 shadow-sm"
              >
                <div className="flex justify-between items-center border-b border-[#E2E8F0] pb-3 mb-4">
                  <span className="font-bold text-sm bg-[#F8FAFC] text-[#0F172A] px-3 py-1 border border-[#E2E8F0] rounded-md">
                    ⭐ Rating: {feedback.rating}/5
                  </span>
                  
                  <span className="text-xs text-[#64748B]">
                    {new Date(feedback.createdAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-[#22C55E]/5 border border-[#22C55E]/10 rounded-lg p-3.5">
                    <p className="text-sm font-semibold text-[#22C55E] mb-1">
                      Strengths
                    </p>
                    <p className="text-[#0F172A] text-sm leading-relaxed">
                      {feedback.strengths}
                    </p>
                  </div>

                  <div className="bg-[#EF4444]/5 border border-[#EF4444]/10 rounded-lg p-3.5">
                    <p className="text-sm font-semibold text-[#EF4444] mb-1">
                      Improvements
                    </p>
                    <p className="text-[#0F172A] text-sm leading-relaxed">
                      {feedback.improvements}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}