export default async function handler(req, res) {
  if (req.method == "POST") {
    let result = new Date();
    return res.status(200).json(result);
  }
}
