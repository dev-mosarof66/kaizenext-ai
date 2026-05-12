import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

export async function getSanityData<T>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  try {
    return await client.fetch<T>(query, params);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw error;
  }
}

export async function getAllBlogPosts() {
  return getSanityData(
    `*[_type == "blog"] | order(date desc) {
      _id,
      title,
      slug,
      excerpt,
      category,
      author,
      date,
      readTime,
      image,
      relatedPosts
    }`
  );
}

export async function getBlogPostBySlug(slug: string) {
  return getSanityData(
    `*[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      author,
      date,
      readTime,
      image,
      body,
      relatedPosts
    }`,
    { slug }
  );
}

export async function getAllCaseStudies() {
  return getSanityData(
    `*[_type == "caseStudy"] | order(date desc) {
      _id,
      title,
      slug,
      client,
      category,
      outcome,
      image,
      date,
      timeline
    }`
  );
}

export async function getCaseStudyBySlug(slug: string) {
  return getSanityData(
    `*[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      client,
      category,
      outcome,
      image,
      date,
      challenge,
      solution,
      results,
      timeline,
      nextSteps,
      relatedProjects
    }`,
    { slug }
  );
}
