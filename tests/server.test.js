const request = require("supertest");
const app = require("../server");

test("GET / should return 'Hello, Jenkins CI/CD!'", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello, Jenkins CI/CD!");
  expect(res.statusCode).toBe(200);
});
