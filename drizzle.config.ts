import { defineConfig } from "drizzle-kit";

// Database is optional - app will use in-memory storage if DATABASE_URL is not set
const databaseUrl = process.env.DATABASE_URL || "postgresql://localhost:5432/placeholder";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
