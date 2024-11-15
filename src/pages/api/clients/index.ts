import type { APIRoute } from "astro";
import { Clients, db } from "astro:db";

export const GET: APIRoute = async ({params, request}) => {

  const allClients = await db.select().from(Clients)

  return new Response(JSON.stringify(allClients), {
    status: 200,
    headers: {
      "Content-Type": "aplication/json"
    }
  })
}
