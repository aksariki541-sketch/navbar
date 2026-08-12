import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // The client still loads on public pages when auth is not configured.
  // Set AUTH_URL in Vercel when enabling the authentication flows.
  baseURL: process.env.NEXT_PUBLIC_AUTH_URL || process.env.AUTH_URL || "",
});
