import type { RequestHandler } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const prerender = true;

export const GET: RequestHandler = () => {
  throw redirect(301, '/#projects');
}