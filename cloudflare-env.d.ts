declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    ADMIN_EMAIL?: string;
    OPENAI_API_KEY?: string;
    OPENAI_MODEL?: string;
    BUCKET?: R2Bucket;
  }
}
