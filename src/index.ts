import { Client } from "pg";
import { Hono } from "hono";
import { drizzle } from "drizzle-orm/node-postgres";

const client = new Client({
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || "5432"),
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

await client.connect();
const db = drizzle(client);

const app = new Hono();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

export default app;
