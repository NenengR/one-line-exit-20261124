import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One-line resignation letter entry: the line below is the whole entry.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.
const line =
  "Dear Sir, I resign effective immediately. The printer has jammed for the last time, and frankly, so have I.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
void here;
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
