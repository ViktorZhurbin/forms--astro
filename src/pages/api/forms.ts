import type { APIRoute } from "astro";
import type { FormType } from "~/constants/forms";

export const GET: APIRoute = async (context) => {
	const runtime = context.locals.runtime;

	const ps = runtime?.env?.DB?.prepare("SELECT * FROM Forms");
	const data = await ps.all();

	return Response.json({
		data: data.results as FormType[],
	});
};
