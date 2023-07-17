export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(400).json({ name: "GET" });
  } else {
    res.status(400).json({ name: "Not found" });
  }
}
