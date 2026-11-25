import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One freshly coined word describing an ex: someone now only a memory,
// filed away and no longer carried. Exactly one word, no spaces.
const WORD = "Exmemoried";

// Guards the entry word: non-blank, 1-111 chars, exactly one token,
// letters only, valid UTF-8. Throws on any violation.
function validateWord(word: string): void {
  if (!word || word.trim().length === 0) {
    throw new Error("word must be non-blank");
  }
  if (word.length < 1 || word.length > 111) {
    throw new Error("word must be 1-111 characters");
  }
  if (word.trim().split(/\s+/).length !== 1) {
    throw new Error("word must be exactly one token");
  }
  if (!/^[\p{L}]+$/u.test(word)) {
    throw new Error("word must be letters only");
  }
  const roundTripped = Buffer.from(word, "utf8").toString("utf8");
  if (roundTripped !== word) {
    throw new Error("word must be valid UTF-8");
  }
}

validateWord(WORD);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
