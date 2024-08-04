import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"), // Alias for src directory
			"@assets": resolve(__dirname, "src/assets"), // Alias for assets directory
			"@shareGlobal": resolve(__dirname, "src/@share"), // Alias for components directory
			// Add more aliases as needed
		},
	},
});
