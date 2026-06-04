"use server";

import { prisma } from "@/lib/db/prisma";
import { feedbackSchema } from "@/lib/schemas/feedback.schema";
import { revalidatePath } from "next/cache";

export async function createFeedback(formData: FormData) {
    const rawData = {
        rating: Number(formData.get("rating")),
        strengths: formData.get("strengths")?.toString() || "",
        improvements: formData.get("improvements")?.toString() || "",
        projectId: formData.get("projectId")?.toString() || ""
    }

    const validated = feedbackSchema.parse(rawData);

    await prisma.feedback.create({
        data: validated
    })

    revalidatePath(`/projects/${validated.projectId}`)
}