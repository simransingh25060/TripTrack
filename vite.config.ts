import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(async (config) => {
  const { reactRouter } = await import("@react-router/dev/vite");
  const { sentryReactRouter } = await import("@sentry/react-router");
  
  return {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
      reactRouter(),
      sentryReactRouter({
        org: "travel-j2",
        project: "travel-app",
        // An auth token is required for uploading source maps;
        // store it in an environment variable to keep it secure.
        authToken: "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",
      }, config)
    ],
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});