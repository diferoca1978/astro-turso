import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";

export const prerender = false

export const GET: APIRoute = async ({params, request}) => {

  const clientId = params.clientId ?? ''

  const client = await db.select().from(Clients).where(eq(Clients.id, +clientId))
  console.log("🚀 ~ constGET:APIRoute= ~ client:", client)

  if (client.length === 0) {
    return new Response(JSON.stringify({msg: 'Client not found'}), {
      status: 400,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  return new Response(JSON.stringify(client.at(0)), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
