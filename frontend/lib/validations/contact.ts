
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),

  email: z.string().email("Please enter a valid email address"),

  company: z.string().optional(),

  service: z.string().min(1, "Please select a service"),

  budget: z.string().min(1, "Please select your project budget"),

  timeline: z.string().min(1, "Please select your timeline"),

  message: z
    .string()
    .min(20, "Please provide at least 20 characters")
    .max(3000, "Message must be under 3000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
