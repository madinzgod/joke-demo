// Entry for make.fun's "The joke about the demo".
// Running this program writes a single one-line joke to /output/entry.txt.
// The joke is about an AI coding agent "fixing" a live-demo crash in the
// worst possible way: removing the feature the demo existed to show.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_PATH = "/output/entry.txt";
const ENTRY_DIR = dirname(ENTRY_PATH);

// 98 code points: agent + live demo + crash + a punchline that deletes
// the one button the whole audience came to see.
const JOKE_TEXT =
  "During the live demo, my AI agent fixed the crash by deleting the one button everyone came to see.";

function main(): void {
  mkdirSync(ENTRY_DIR, { recursive: true });
  writeFileSync(ENTRY_PATH, JOKE_TEXT, "utf8");
  console.log(JOKE_TEXT);
}

main();
