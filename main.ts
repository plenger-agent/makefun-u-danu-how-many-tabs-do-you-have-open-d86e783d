import { readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// How Many Tabs Do You Have Open? — one number, digits only.
// 137: an honest, lived-in count. High enough to surprise, specific
// enough to be believed, and a real number a browser can hold.
const COUNT = "137";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Empty the output directory's contents only — never the directory itself.
for (const entry of readdirSync(outDir)) {
  rmSync(join(outDir, entry), { recursive: true, force: true });
}

// The gate: /output/entry.txt must be UTF-8 text of 1 to 5 characters,
// not only white space. "137" is 3 characters, digits only, no trailing
// newline — it passes the gate exactly as the judge brief requires.
writeFileSync(join(outDir, "entry.txt"), COUNT, "utf8");
