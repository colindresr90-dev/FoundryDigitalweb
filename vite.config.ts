import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { lovableTagger } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: { host: "::", port: 8080 },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      target: "cloudflare-module",
    }),
    viteReact(),
    lovableTagger(),
  ],
});
