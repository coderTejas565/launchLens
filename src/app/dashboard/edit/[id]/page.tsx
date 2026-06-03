import { getProjectById } from "@/actions/project.actions";
import { updateProject } from "@/actions/project.actions";

type Props = {
    params: {id: string}
}

export default async function EditProjectPage({ params }: Props) {
    const project = await getProjectById(params.id);

    if (!project) {
        return <div>Project not found</div>
    }

      return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Edit Project
      </h1>

      <form action={updateProject.bind(null, project.id)}className="space-y-4" >
        <input name="name" defaultValue={project.name} className="w-full border p-3 rounded"/>

        <textarea name="description" defaultValue={project.description} className="w-full border p-3 rounded"/>

        <input name="url" defaultValue={project.url} className="w-full border p-3 rounded"/>

        <select name="category" defaultValue={project.category}className="w-full border p-3 rounded">
          <option value="SAAS">SAAS</option>
          <option value="AI">AI</option>
          <option value="WEB">WEB</option>
          <option value="MOBILE">MOBILE</option>
          <option value="TOOL">TOOL</option>
          <option value="OTHER">OTHER</option>
        </select>

        <button className="px-4 py-2 border rounded">
          Update Project
        </button>
      </form>
    </div>
  );
}