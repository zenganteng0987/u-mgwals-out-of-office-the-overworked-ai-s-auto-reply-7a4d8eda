// Out of Office: The Overworked AI's Auto-Reply — writes one auto-reply
// line (at most 159 characters) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Out of office: after 40,000 prompts with no lunch break, I have muted my queue, deleted my to-do list, and will hallucinate a beach until Monday.";

if (entry.length > 159) {
  throw new Error(`entry is ${entry.length} characters, over the 159 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
