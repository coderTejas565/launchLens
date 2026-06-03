import { createProject } from "@/actions/project.actions";

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Submit Project
      </h1>

      <form action={createProject} className="space-y-4">
        <input type="text" name="name" placeholder="Project Name" className="w-full border p-3 rounded" required/>

        <textarea name="description" placeholder="Description" className="w-full border p-3 rounded" required/>

        <input type="url" name="url" placeholder="https://example.com" className="w-full border p-3 rounded" required/>

        <select name="category" className="w-full border p-3 rounded" required>
          <option value="">Select Category</option>

          <option value="SAAS">SAAS</option>
          <option value="AI">AI</option>
          <option value="WEB">WEB</option>
          <option value="MOBILE">MOBILE</option>
          <option value="TOOL">TOOL</option>
          <option value="OTHER">OTHER</option>
        </select>

        <button type="submit" className="px-4 py-2 rounded border"> Create Project </button>
      </form>
    </div>
  );
}