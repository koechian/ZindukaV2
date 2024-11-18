import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "g1w8qgx3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
