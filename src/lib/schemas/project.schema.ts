import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(3, "Project name must be at least 3 characters"),

  description: z.string().min(10, "Description must be at least 10 characters"),

  url: z.url("Invalid URL"),

  category: z.enum(["SAAS", "AI", "WEB", "MOBILE", "TOOL", "OTHER"]),
});


export type ProjectInput = z.infer<typeof projectSchema>