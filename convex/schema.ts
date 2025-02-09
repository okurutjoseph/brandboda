import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  clients: defineTable({
    name: v.string(),
    logoUrl: v.string(),
    website: v.optional(v.string()),
  }),
  
  testimonials: defineTable({
    authorName: v.string(),
    role: v.string(),
    company: v.string(),
    content: v.string(),
    avatarUrl: v.optional(v.string()),
  }),
  
  projects: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    link: v.string(),
    tags: v.array(v.string()),
    featured: v.boolean(),
  }),
  
  certificates: defineTable({
    title: v.string(),
    imageUrl: v.string(),
    issuer: v.string(),
    issueDate: v.string(),
    description: v.optional(v.string()),
  }),
});