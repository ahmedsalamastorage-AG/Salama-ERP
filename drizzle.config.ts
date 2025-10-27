import { defineConfig } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export default defineConfig({
  schema: "./db/schema",
  out: "./db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || ""
  }
});