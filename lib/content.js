import client from "./contentful";

export async function getBlogContent(slug) {
  let ss = await client.getEntries({
    "fields.slug": "animated-gif-test",
    content_type: "blogPosts",
  });
  console.log("ss", ss);
  return ss;
}

export async function getAllBlogContent() {
  return await client.getEntries({
    content_type: "blogPosts",
    limit: 5,
  });
}
