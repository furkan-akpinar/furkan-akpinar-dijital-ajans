import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { validateArtifact } from "./validate-artifact.mjs";

const [command, ...args] = process.argv.slice(2);
if (!["dev", "build", "start"].includes(command)) {
  throw new Error("Usage: node scripts/run.mjs dev|build|start [arguments]");
}

const cli = fileURLToPath(
  new URL("../node_modules/vinext/dist/cli.js", import.meta.url),
);
const child = spawn(process.execPath, [cli, command, ...args], {
  stdio: "inherit",
  env: {
    ...process.env,
    WRANGLER_WRITE_LOGS: "false",
    WRANGLER_LOG_PATH: ".wrangler/logs",
    MINIFLARE_REGISTRY_PATH: ".wrangler/registry",
  },
});
child.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("exit", async (code) => {
  process.exitCode = code ?? 1;
  if (code === 0 && command === "build") {
    try {
      await validateArtifact();
    } catch (error) {
      console.error(error);
      process.exitCode = 1;
    }
  }
});
