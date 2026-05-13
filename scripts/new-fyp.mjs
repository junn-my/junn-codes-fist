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
console.log("This creates a new FYP showcase page under app/fyp/[slug]/page.tsx\n");

const title = await prompt("Project title: ");
const tagline = await prompt("One-line description (shown on FYP index card): ");
const studentName = await prompt("Your full name: ");
const studentGithub = await prompt("Your GitHub username: ");
const academicYear = await prompt("Academic year (e.g. 2023/2024): ");
const stackInput = await prompt("Tech stack (comma-separated, e.g. React,Node.js,PostgreSQL): ");
const github = await prompt("GitHub repo URL: ");
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
const fullSlug = slug;

const dir = path.join(ROOT, "app", "fyp", fullSlug);
const file = path.join(dir, "page.tsx");

if (fs.existsSync(file)) {
    console.error(`\n❌ FYP page already exists: ${file}`);
    process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const fnName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
    .replace(/[^a-zA-Z0-9]/g, "");

const template = `import type { Metadata } from "next";
import type { FypMeta } from "@/lib/types";
import {
  FypLayout,
  OverviewSection,
  TechSection,
  ReflectionSection,
} from "@/components/fyp/FypLayout";

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT THIS — project information
// ─────────────────────────────────────────────────────────────────────────────
export const meta: FypMeta = {
  slug: "${fullSlug}",
  title: "${title}",
  tagline: "${tagline}",
  studentName: "${studentName}",
  studentGithub: "${studentGithub}",
  academicYear: "${academicYear}",
  stack: ${JSON.stringify(stack)},
  ${github ? `github: "${github}",` : '// github: "",'}
  ${demo ? `demo: "${demo}",` : '// demo: "",'}
  // coverImage: "https://r2.junn.codes/mmu/fyp/${fullSlug}/cover.png",
  tags: [],
};

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
//     You can also upload a cover image to R2 and add it to meta.coverImage.
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

fs.writeFileSync(file, template, "utf-8");

// ── Inject into lib/data.ts ──────────────────────────────────────────────────
const dataPath = path.join(ROOT, "lib", "data.ts");
const dataSource = fs.readFileSync(dataPath, "utf-8");

const newEntry = `  {
    slug: "${fullSlug}",
    title: "${title}",
    tagline: "${tagline}",
    studentName: "${studentName}",
    studentGithub: "${studentGithub}",
    academicYear: "${academicYear}",
    stack: ${JSON.stringify(stack)},
    tags: [],${github ? `\n    github: "${github}",` : ""}${demo ? `\n    demo: "${demo}",` : ""}
  },`;

// Insert before the closing ]; of fypProjects
const updatedData = dataSource.replace(
    /^(export const fypProjects[\s\S]*?)(];)/m,
    (_, arr, closing) => `${arr}${newEntry}\n${closing}`
);

if (updatedData === dataSource) {
    console.warn("\n⚠️  Could not auto-update lib/data.ts — add the entry manually.");
} else {
    fs.writeFileSync(dataPath, updatedData, "utf-8");
    console.log("   Updated: lib/data.ts (entry added to fypProjects)");
}

console.log(`\n✅ Created: app/fyp/${fullSlug}/page.tsx`);
console.log("\nNext steps:");
console.log("  1. Open the file and fill in your project content");
console.log("  2. Optionally upload a cover image via the R2 upload tool");
console.log("  3. Open a PR — see CONTRIBUTING.md for guidelines\n");
