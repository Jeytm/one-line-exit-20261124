import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I resign effective immediately — 'other duties as assigned' turned out to include my soul, and I'm taking it back.";

// Runtime gate: entry must be a single line of 1–140 chars.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`Entry violates char gate: ${entry.length} chars (must be 1–140).`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("Entry must be a single line (no newline).");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(`Entry (${entry.length} chars): ${entry}`);
