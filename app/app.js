import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
export const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from my CI/CD pipeline!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

app.get("/add/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }
  res.json({ result: a + b });
});


