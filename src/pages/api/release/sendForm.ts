import { createClient } from "@libsql/client";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ locals, request }) => {
  const token = locals.runtime.env.TURSO_AUTH_TOKEN;
  const db_url = locals.runtime.env.TURSO_DATABASE_URL;
  const data = await request.json();
  const email = data.email;

  try {
    const tursoClient = createClient({
      url: db_url,
      authToken: token,
    });

    tursoClient.execute({
      sql: "INSERT INTO collected_emails(ID, email) VALUES (null, ?)",
      args: [email],
    });

    return new Response(
      JSON.stringify({
        preregister: "ok",
        email,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        preregister: "Error",
        error,
      })
    );
  }
};
