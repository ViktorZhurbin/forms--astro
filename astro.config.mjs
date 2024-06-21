import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	// Enable React to support React JSX components.
	integrations: [react()],
	output: "server",
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
