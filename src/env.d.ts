/// <reference types="astro/client" />

type ENV = {
  // replace `MY_KV` with your KV namespace
  TURSO_DATABASE_URL: string;
  TURSO_AUTH_TOKEN: string;
};

// use a default runtime configuration (advanced mode).
type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
  interface Locals extends Runtime {}
}
