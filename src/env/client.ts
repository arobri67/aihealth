import { createEnv } from "@t3-oss/env-nextjs";
import { ZodError, z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_UTSFS_ID_AI_HEALTHCARE_HUB: z.string().min(1),
    NEXT_PUBLIC_BASE_URL: z.string().url(),
    NEXT_PUBLIC_OPENGRAPH_PIC: z.string().url(),
  },
  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid environment variables:",
      error.flatten().fieldErrors
    );
    process.exit(1);
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_UTSFS_ID_AI_HEALTHCARE_HUB:
      // eslint-disable-next-line n/no-process-env
      process.env.NEXT_PUBLIC_UTSFS_ID_AI_HEALTHCARE_HUB,
    NEXT_PUBLIC_BASE_URL:
      // eslint-disable-next-line n/no-process-env
      process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_OPENGRAPH_PIC:
      // eslint-disable-next-line n/no-process-env
      process.env.NEXT_PUBLIC_OPENGRAPH_PIC,
  },
  emptyStringAsUndefined: true,
});
