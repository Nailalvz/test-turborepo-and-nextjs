import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content" | "theme"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  theme: sharedConfig,
  prefix: "ui-",
};

export default config;
