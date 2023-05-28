import { pgTable, serial, timestamp, varchar, date } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
import { UsersTable } from "./users";

export const ExperiencesTable = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  industry: varchar("industry").notNull(),
  companyName: varchar("company_name").notNull(),
  yearsOfExperience: varchar("years_of_experience").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Experience = InferModel<typeof ExperiencesTable>;
export type NewExperience = InferModel<typeof ExperiencesTable, "insert">;
