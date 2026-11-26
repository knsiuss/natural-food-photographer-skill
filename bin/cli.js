#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const os = require("os");

const SKILL_NAME = "natural-food-photographer";
const sourceDir = path.resolve(__dirname, "..", "skills", SKILL_NAME);

const argv = process.argv.slice(2);
const command = argv[0] && !argv[0].startsWith("-") ? argv[0] : "init";
const flags = command === "init" && argv[0] === "init" ? argv.slice(1) : argv;

if (command !== "init") {
  console.log("Usage: npx natural-food-photographer-skill init [--global]");
  process.exit(1);
}

const isGlobal = flags.includes("--global") || flags.includes("-g");
const target = isGlobal
  ? path.join(os.homedir(), ".claude", "skills", SKILL_NAME)
  : path.join(process.cwd(), ".claude", "skills", SKILL_NAME);

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.cpSync(sourceDir, target, { recursive: true });

console.log(`Installed ${SKILL_NAME} -> ${target}`);
console.log("\nNext steps:");
console.log("1. Open Claude Code in your project.");
console.log('2. Run: "Use natural-food-photographer for a GoFood menu photo of nasi goreng"');
console.log('3. Run: "Use natural-food-photographer to turn this phone photo into a promo banner"');
