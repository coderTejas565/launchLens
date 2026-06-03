import { getProjectById } from "@/actions/project.actions";
import { notFound } from "next/navigation";

type props = {
    params: {
        id: string
    }
}

export default async function ProjectDetailPage({params}: props) {
    const project = await  getProjectById(params.id)

    if (!project) {
        notFound()
    }

    return(
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
          className="text-blue-500 mt-4 inline-block"
        >
          Visit Project →
        </a>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">
          Feedback
        </h2>

        <p className="text-gray-500 mt-2">
          Feedback system will be added in 
        </p>
      </div>
    </div>
    )
}