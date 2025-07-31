import * as Sentry from "@sentry/react-router";

Sentry.init({
  dsn: "https://c5b10d88453964558f5d5db38f21200f@o4509764057497600.ingest.us.sentry.io/4509764065558528",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
