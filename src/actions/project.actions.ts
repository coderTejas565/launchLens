"use server";

import { prisma } from "@/lib/db/prisma";
import { projectSchema } from "@/lib/schemas/project.schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData) {
    try {
        const rawData = {
            name: formData.get("name"),
            description: formData.get("description"),
            url: formData.get("url"),
            Category: formData.get("category")
        };

        const validatedData = projectSchema.parse(rawData);

        await prisma.project.create({
            data: validatedData
        })
        
        revalidatePath("/projects");

        redirect("/projects")
    } catch (error) {
        console.error("Create Project Error:", error);
        throw new Error("Failed to create project");
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
    revalidatePath("/dashboard")
}