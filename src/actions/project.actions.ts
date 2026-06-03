"use server";

import { prisma } from "@/lib/db/prisma";
import { projectSchema } from "@/lib/schemas/project.schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
  try {
    const rawData = {
        name: formData.get("name")?.toString() || "",
        description: formData.get("description")?.toString() || "",
        url: formData.get("url")?.toString() || "",
        category: formData.get("category")?.toString() || "",
    };

    const validatedData = projectSchema.parse(rawData);

    await prisma.project.create({
      data: validatedData,
    });

    revalidatePath("/projects");

    redirect("/projects");

  } catch (error) {
    throw error;
  }
}


export async function getProjects() {
    return prisma.project.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
}


export async function getProjectById(id: string) {
    return prisma.project.findUnique({
        where: {
            id,
        },
        include: {
            feedbacks: true
        }
    })
}


export async function deleteProject(id: string) {
    await prisma.project.delete({
        where: {
            id,
        },
    })
    revalidatePath("/projects");
    revalidatePath("/dashboard");

    redirect("/dashboard")
}

export async function updateProject(id: string, formData: FormData) {
  const rawData = {
    name: formData.get("name")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    url: formData.get("url")?.toString() || "",
    category: formData.get("category")?.toString() || "",
  };

  const validated = projectSchema.parse(rawData);

  await prisma.project.update({
    where: { id },
    data: validated,
  });

  revalidatePath("/projects");
  revalidatePath("/dashboard");

  redirect("/dashboard");
}