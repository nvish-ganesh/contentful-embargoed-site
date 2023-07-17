export default function handler(req, res) {
  if (req.method === "GET") {
    // Process a POST request
  } else {
    res.status(400).json({ name: "Not found" });
  }
}
