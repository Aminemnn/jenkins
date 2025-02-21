const request = require("supertest");
const app = require("../server");

test("GET / should return 'Hello, Jenkins CI/CD!'", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello, Jenkins CI/CD!");
  expect(res.statusCode).toBe(200);
});

test("GET /new-feature should return '🚀 New feature deployed via Jenkins!'", async () => {
  const res = await request(app).get("/new-feature");
  expect(res.text).toBe("🚀 New feature deployed via Jenkins!");
  expect(res.statusCode).toBe(200);
});
