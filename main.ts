// one-line-slogan-solana-wallet-agent — one slogan, one line, 63 characters, 12 words.
// Triplet of plain agent verbs (signs, swaps, pays) + a three-word closer: the agent works, you live.
// K1 names the wallet agent; K3 promises three concrete jobs in plain words.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const slogan = "Your Solana wallet agent signs, swaps, and pays. You just live.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
const target = `${dir}/entry.txt`;
writeFileSync(target, slogan, "utf8");
chmodSync(target, 0o644);
