let SERVICE_URL = "localhost:8080/images";

export function contentService(entry) {
  return entry?.replaceAll("images.ctfassets.net", SERVICE_URL);
}
