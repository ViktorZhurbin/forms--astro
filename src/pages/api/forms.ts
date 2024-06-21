import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	return Response.json({
		data: [
			{ id: "1", name: "Form 1", responseCount: 0 },
			{ id: "2", name: "My Other Form", responseCount: 10000 },
		],
	});
};
