import { z } from "zod";

// Simple schemas for Google Sheets integration
export const insertWaitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email is required"),
});

export const waitlistEntrySchema = z.object({
  id: z.number(),
  name: z.string(),
  company: z.string().nullable(),
  email: z.string(),
  createdAt: z.string(),
});

export type InsertWaitlistEntry = z.infer<typeof insertWaitlistSchema>;
export type WaitlistEntry = z.infer<typeof waitlistEntrySchema>;
