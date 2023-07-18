import { cdnClient, previewClient } from "./contentful";

export async function getCustomerContent(preview) {
  const client = preview ? previewClient : cdnClient;

  return await client.getEntry("2kH71Wu7coFa7VqjKea2gt");
}
