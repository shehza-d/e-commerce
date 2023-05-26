import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { apiVersion, dataset, projectId } from "./sanity/lib/env";
import schemas from "@/sanity/schemas";

export default defineConfig({
  basePath: "/admin",
  title: "e-commerce-hackathon",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemas' folder
  schema: { types: schemas },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
