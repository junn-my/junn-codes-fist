#!/usr/bin/env node
// scripts/new-fyp.mjs
// Run: npm run new:fyp

import fs from "fs";
import path from "path";
import { createInterface } from "readline";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function prompt(question) {
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

console.log("\n🎓 New FYP Page Generator — mmu.junn.codes\n");
console.log("This creates a new FYP showcase page under app/fyp/[slug]/\n");

const title = await prompt("Project title: ");
const tagline = await prompt("One-line description (shown on FYP index card): ");
const studentName = await prompt("Your full name: ");
const studentGithub = await prompt("Your GitHub username: ");
const academicYear = await prompt("Academic year (e.g. 2023/2024): ");
const stackInput = await prompt("Tech stack (comma-separated, e.g. React,Node.js,PostgreSQL): ");
const github = await prompt("GitHub repo URL (leave blank if none): ");
const demo = await prompt("Live demo URL (leave blank if none): ");

const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 60);

const stack = stackInput
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

const dir = path.join(ROOT, "app", "fyp", slug);
const metaFile = path.join(dir, "meta.json");
const pageFile = path.join(dir, "page.tsx");

if (fs.existsSync(pageFile)) {
    console.error(`\n❌ FYP page already exists: ${pageFile}`);
    process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

// ── Create meta.json ────────────────────────────────────────────────────────
const meta = {
    slug,
    title,
    tagline,
    studentName,
    studentGithub,
    academicYear,
    stack,
    ...(github ? { github } : {}),
    ...(demo ? { demo } : {}),
    tags: [],
};

fs.writeFileSync(metaFile, JSON.stringify(meta, null, 4) + "\n", "utf-8");

// ── Create page.tsx ─────────────────────────────────────────────────────────
const fnName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");

const pageTemplate = `import type { Metadata } from "next";
import type { FypMeta } from "@/lib/types";
import metaJson from "./meta.json";
import {
  FypLayout,
  OverviewSection,
  TechSection,
  ReflectionSection,
} from "@/components/fyp/FypLayout";

const meta = metaJson as FypMeta;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.tagline,
};

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT BELOW — write about your project
//
//     Available section components:
//       <OverviewSection>   — what the project does, problem it solves
//       <TechSection>       — architecture, technical decisions
//       <ReflectionSection> — what you learned, challenges, what you'd do differently
//
//     To update project info (title, stack, etc.) edit meta.json in this folder.
// ─────────────────────────────────────────────────────────────────────────────
export default function ${fnName}FYP() {
  return (
    <FypLayout meta={meta}>
      <OverviewSection>
        {/* ✏️ Describe your project */}
        <p>
          Describe what your project does, what problem it solves, and who it
          is for. Be specific — this is your showcase.
        </p>
      </OverviewSection>

      <TechSection>
        {/* ✏️ Explain your technical choices */}
        <p>
          Walk through the architecture, key technical decisions, and anything
          interesting you built.
        </p>
      </TechSection>

      <ReflectionSection>
        {/* ✏️ Reflect on the experience */}
        <p>
          What did you learn? What was the hardest part? What would you do
          differently?
        </p>
      </ReflectionSection>
    </FypLayout>
  );
}
`;

fs.writeFileSync(pageFile, pageTemplate, "utf-8");

console.log(`\n✅ Created: app/fyp/${slug}/meta.json`);
console.log(`✅ Created: app/fyp/${slug}/page.tsx`);
console.log("\nNext steps:");
console.log("  1. Open page.tsx and fill in your project content");
console.log("  2. Edit meta.json to update project details at any time");
console.log("  3. Optionally add a cover image URL to meta.json as \"coverImage\"");
console.log("  4. Open a PR — see CONTRIBUTING.md for guidelines\n");
