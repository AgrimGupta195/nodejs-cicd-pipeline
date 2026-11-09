
import request from "supertest";
import { app } from "../app/app.js";

test("GET / returns 200", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});

test("GET /health returns healthy", async () => {
  const res = await request(app).get("/health");
  expect(res.body.status).toBe("healthy");
});

test("GET /add/2/3 returns 5", async () => {
  const res = await request(app).get("/add/2/3");
  expect(res.body.result).toBe(5);
});