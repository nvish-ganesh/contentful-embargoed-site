export default function handler(req, res) {
  const { secret } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});
  res.redirect(`/customer`);
}
