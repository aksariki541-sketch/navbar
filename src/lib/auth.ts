import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import VerifyEmail from "@/components/verify-email";
import { Resend } from "resend";
import ForgotPasswordEmail from "@/components/reset-password";

/**
 * Authentication is optional for the public portfolio pages. Keeping a safe
 * fallback here lets the site build and deploy without leaking or requiring
 * production credentials in the repository. Add the auth environment
 * variables in Vercel when enabling login, signup, and the dashboard.
 */
const hasAuthConfig = Boolean(
  process.env.MONGODB_URI &&
  process.env.RESEND_API_KEY &&
  process.env.GOOGLE_CLIENT_ID &&
  process.env.GOOGLE_CLIENT_SECRET
);

function createConfiguredAuth() {
  const client = new MongoClient(process.env.MONGODB_URI!);
  const db = client.db();
  const resend = new Resend(process.env.RESEND_API_KEY!);

  return betterAuth({
    emailVerification: {
      sendVerificationEmail: async ({ user, url }) => {
        await resend.emails.send({
          from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
          to: user.email,
          subject: "Verify your email",
          react: VerifyEmail({ username: user.name, verifyUrl: url }),
        });
      },
      sendOnSignUp: true,
    },
    database: mongodbAdapter(db, { client }),
    emailAndPassword: {
      enabled: true,
      sendResetPassword: async ({ user, url }) => {
        await resend.emails.send({
          from: `${process.env.EMAIL_SENDER_NAME} <${process.env.EMAIL_SENDER_ADDRESS}>`,
          to: user.email,
          subject: "Reset your password",
          react: ForgotPasswordEmail({
            username: user.name,
            resetUrl: url,
            userEmail: user.email,
          }),
        });
      },
      requireEmailVerification: true,
    },
    socialProviders: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      },
    },
  });
}

// better-auth can initialize without a database for the public-only mode.
// Its API routes simply remain unavailable until the real credentials exist.
export const auth = hasAuthConfig
  ? createConfiguredAuth()
  : betterAuth({ emailAndPassword: { enabled: false } });
