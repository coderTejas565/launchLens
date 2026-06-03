import { z } from "zod"

export const feedbackSchema = z.object({
    rating: z.number().min(1,  "Rating must be between 1 and 5").max(5,  "Rating must be between 1 and 5"),

    strengths: z.string().min(5, "Strengths must be at least 5 characters"),

    improvements: z.string().min(5, "Improvements must be at least 5 characters"),

    projectId: z.string().min(1), 
})

export type FeedbackInput = z.infer<typeof feedbackSchema>;