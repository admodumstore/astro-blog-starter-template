// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://sovereignvitality.me",  // Update to your actual domain
	output: "static",  // Add this line for static output
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
