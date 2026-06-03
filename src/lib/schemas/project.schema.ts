import { z } from "zod"

export const projectSchema = z.object({
    name: z.string().min(10, "Project name must be at least 3 character"),

    description: z.string().min(10, "Description must be at least 3 character"),

    url: z.url("Please enter a valid URL"),

    category: z.enum([
        "SAAS",
        "AI",
        "WEB",
        "MOBILE",
        "TOOL",
        "OTHER"
    ]),
})


export type ProjectInput = z.infer<typeof projectSchema>