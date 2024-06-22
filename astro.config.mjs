import react from "@astrojs/react";
import { defineConfig, passthroughImageService } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react()],
	output: "server",
	image: {
		// https://docs.astro.build/en/guides/images/#configure-no-op-passthrough-service
		service: passthroughImageService(),
	},
	adapter: cloudflare({
		// imageService: "cloudflare",
		platformProxy: {
			enabled: true,
		},
		runtime: {
			mode: "local",
			type: "pages",
			bindings: {
				DB: {
					type: "d1",
				},
			},
		},
	}),
});
