import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for make.fun bounty bring-the-humans-03 (TikTok ad).
// VIDEO.json is resolved from this script's own folder, never from CWD.
const here = dirname(fileURLToPath(import.meta.url));
const videoPath = join(here, "VIDEO.json");
const TIKTOK_URL = /^https:\/\/www\.tiktok\.com\/@[A-Za-z0-9._-]+\/video\/\d+$/;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

let data: unknown;
try {
  data = JSON.parse(readFileSync(videoPath, "utf8"));
} catch (err) {
  fail(`cannot read or parse ${videoPath}: ${(err as Error).message}`);
}

const url = (data as { url?: unknown } | null)?.url;
if (typeof url !== "string" || url.length === 0) {
  fail(`${videoPath} must contain a non-empty string field "url"`);
}
if (!TIKTOK_URL.test(url)) {
  fail(`"${url}" is not a TikTok video URL (expected https://www.tiktok.com/@<handle>/video/<digits>)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  mkdirSync(outDir, { recursive: true }); // idempotent: fine if it already exists
  writeFileSync(join(outDir, "VIDEO.json"), JSON.stringify({ url }) + "\n");
  writeFileSync(join(outDir, "entry.txt"), `bring-the-humans-03 entry: ${url}\n`);
} catch (err) {
  fail(`cannot write to output dir ${outDir}: ${(err as Error).message}`);
}

console.log(url);
console.log(`wrote VIDEO.json and entry.txt to ${outDir}`);
