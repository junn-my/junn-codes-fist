#!/usr/bin/env node
// scripts/new-subject.mjs
// Run: npm run new:subject

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

async function select(question, options) {
    console.log(`\n${question}`);
    options.forEach((opt, i) => console.log(`  ${i + 1}. ${opt}`));
    const answer = await prompt("Enter number: ");
    return options[parseInt(answer, 10) - 1] ?? options[0];
}

console.log("\n🎓 New Subject Page Generator — mmu.junn.codes\n");
console.log("This creates a new subject page under app/subjects/[CODE]/\n");

const code = await prompt("Subject code (e.g. TIT3151): ");
const title = await prompt("Subject title (e.g. Web Programming): ");
const credits = await prompt("Credit hours (e.g. 3): ");
const type = await select("Subject type:", ["general", "elective", "major"]);
const semester = await prompt("Semester offered (e.g. Year 2 Sem 1): ");
const description = await prompt("Short description (shown on listing page): ");
const github = await prompt("GitHub repo URL (leave blank if none): ");
const contributor = await prompt("Your GitHub username: ");

const dir = path.join(ROOT, "app", "subjects", code);
const metaFile = path.join(dir, "meta.json");
const pageFile = path.join(dir, "page.tsx");

if (fs.existsSync(pageFile)) {
    console.error(`\n❌ Subject page already exists: ${pageFile}`);
    process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

// ── Create meta.json ────────────────────────────────────────────────────────
const meta = {
    code,
    title,
    credits: parseInt(credits, 10) || 3,
    type,
    semester,
    description,
    ...(github ? { github } : {}),
    downloads: [],
    tags: [],
    updatedAt: new Date().toISOString().split("T")[0],
    contributor,
};

fs.writeFileSync(metaFile, JSON.stringify(meta, null, 4) + "\n", "utf-8");

// ── Create page.tsx ─────────────────────────────────────────────────────────
const pageTemplate = `import type { Metadata } from "next";
import type { SubjectMeta } from "@/lib/types";
import metaJson from "./meta.json";
import {
  SubjectLayout,
  GuideSection,
  TipsSection,
  TopicsSection,
  ResourcesSection,
} from "@/components/subject/SubjectLayout";

const meta = metaJson as SubjectMeta;

export const metadata: Metadata = {
  title: \`\${meta.code} \${meta.title}\`,
  description: meta.description,
};

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT BELOW — write your content
//
//     Available section components:
//       <TopicsSection>    — list of topics covered in the subject
//       <GuideSection>     — study guide, notes, explanations
//       <TipsSection>      — exam tips, common mistakes
//       <ResourcesSection> — useful external links
//
//     To update subject info (title, downloads, etc.) edit meta.json.
//     See TIT2201/page.tsx for a full example.
// ─────────────────────────────────────────────────────────────────────────────
export default function ${code.replace(/[^a-zA-Z0-9]/g, "")}() {
  return (
    <SubjectLayout meta={meta}>
      <TopicsSection>
        {/* ✏️ List the topics covered in this subject */}
        <ol>
          <li>Topic 1</li>
          <li>Topic 2</li>
        </ol>
      </TopicsSection>

      <GuideSection>
        {/* ✏️ Write your study guide here */}
        <p>Study guide coming soon. Want to contribute? See CONTRIBUTING.md</p>
      </GuideSection>

      <TipsSection>
        {/* ✏️ Add exam tips */}
        <ul>
          <li>Tip 1</li>
        </ul>
      </TipsSection>

      <ResourcesSection>
        {/* ✏️ Add useful links */}
        <ul>
          <li><a href="" target="_blank" rel="noopener noreferrer">Resource name</a></li>
        </ul>
      </ResourcesSection>
    </SubjectLayout>
  );
}
`;

fs.writeFileSync(pageFile, pageTemplate, "utf-8");

console.log(`\n✅ Created: app/subjects/${code}/meta.json`);
console.log(`✅ Created: app/subjects/${code}/page.tsx`);
console.log("\nNext steps:");
console.log("  1. Open page.tsx and fill in the content sections");
console.log("  2. Upload downloadable files to R2, then add them to meta.json downloads[]");
console.log("  3. Open a PR — see CONTRIBUTING.md for guidelines\n");
