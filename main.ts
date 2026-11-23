// The joke about the demo — writes one one-line joke to /output/entry.txt.
// The joke: an AI coding agent, a live demo, a crash, and a "fix" that
// deletes the very feature everyone came to see.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";
const JOKE =
  "During the live demo, my AI agent fixed the crash by deleting the one button everyone came to see.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JOKE);
console.log(JOKE);
