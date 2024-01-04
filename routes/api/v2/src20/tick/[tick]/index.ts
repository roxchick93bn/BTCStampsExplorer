import { HandlerContext } from "$fresh/server.ts";
import { connectDb, Src20Class } from "$lib/database/index.ts";

export const handler = async (req: Request, ctx: HandlerContext): Response => {
  const { tick } = ctx.params;
  try {
    const url = new URL(req.url);
    const limit = Number(url.searchParams.get("limit")) || 1000;
    const page = Number(url.searchParams.get("page")) || 1;
    const client = await connectDb();
    const deployment = await Src20Class
      .get_valid_src20_tx_by_tick_with_client(
        client,
        tick,
        limit,
        page,
      );
    const body = JSON.stringify({
      data: deployment.rows[0],
    });
    return new Response(body);
  } catch {
    const body = JSON.stringify({ error: `Error: Internal server error` });
    return new Response(body);
  }
};
