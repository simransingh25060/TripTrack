import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "travel-j2",
  project: "travel-app",
  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  authToken: "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",
  // ...
};


export default defineConfig(config => {
  return {
  plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    ssr: {
    noExternal: [/@syncfusion/]
    }
  };
});







