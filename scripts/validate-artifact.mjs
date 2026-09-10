import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

export async function validateArtifact() {
  const root = new URL("../", import.meta.url);
  const expected = JSON.parse(
    await readFile(new URL(".openai/hosting.json", root), "utf8"),
  );
  const packaged = JSON.parse(
    await readFile(new URL("dist/.openai/hosting.json", root), "utf8"),
  );
  assert.deepEqual(
    packaged,
    expected,
    "Packaged hosting configuration must match the source",
  );
  const { default: worker } = await import(
    new URL("dist/server/index.js", root).href
  );
  assert.equal(
    typeof worker?.fetch,
    "function",
    "The production Worker must export default.fetch",
  );
  console.log("Production Worker and hosting configuration verified.");
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  await validateArtifact();
}
