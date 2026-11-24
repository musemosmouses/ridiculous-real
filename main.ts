// ridiculous-real: one-line startup pitch, written to entry.txt.
// The entry: a bizarre startup that sounds like a joke until the
// business logic lands — insurance for your browser history.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "We insure your browser history: for $3 a month, if you die, a bonded agent deletes your search history before your family finds it — because everyone has something they'd pay to bury.";

// The grader reads /output/entry.txt; locally we also write ./entry.txt.
const targets = ["/output/entry.txt", join(process.cwd(), "entry.txt")];

for (const target of targets) {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, ENTRY, "utf8");
}

console.log(`Wrote ${ENTRY.length}-character entry to ${targets.join(", ")}`);
