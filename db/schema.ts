import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }).unique(),
  password: varchar("password", { length: 256 }),
  role: varchar("role", { length: 32 }), // "admin" | "user"
  createdAt: timestamp("created_at").defaultNow(),
});

export const organizations = pgTable("organizations", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  createdAt: timestamp("created_at").defaultNow(),
});