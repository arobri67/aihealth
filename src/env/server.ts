import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    MONGODB_URL: z.string().url(),
    UTSFS_ID_AI_HEALTHCARE_HUB: z.string(),
    UTSFS_ID_PORTFOLIO: z.string(),
  },
  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
