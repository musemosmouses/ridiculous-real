// ridiculous-real: one-line startup pitch, written to entry.txt.
// The entry: a bizarre startup that sounds like a joke until the
// business logic lands — insurance for your browser history.
//
// Runner fix (EROFS): the grader runs with a read-only cwd, so this
// program writes ONLY under MAKEFUN_OUTPUT_DIR (default "out") and
// never touches process.cwd() or a bare relative path.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "We insure your browser history: for $3 a month, if you die, a bonded agent deletes your search history before your family finds it — because everyone has something they'd pay to bury.";

// The gate allows 1 to 200 characters; this entry is 183.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry must be 1-200 characters, got ${charCount}`);
}

// The grader sets MAKEFUN_OUTPUT_DIR to /output; locally the entry
// lands in ./out/entry.txt. One write target only, always under
// outDir — never the cwd, never a bare relative path.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${charCount}-character entry to ${outPath}`);
