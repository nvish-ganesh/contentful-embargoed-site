import client from "./contentful";

let spaceId = process.env.CONTENTFUL_SPACE_ID;
let environmentId = process.env.CONTENTFUL_ENVIRONMENT;
let accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export async function getBlogContent(slug) {
  let response = await fetch(
    `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blogPosts&fields.slug[all]=${slug}`
  );
  console.log("== res", response.status);
  return await response.json();
}

export async function getAllBlogContent() {
  return await client.getEntries({
    content_type: "blogPosts",
    limit: 5,
  });
}
