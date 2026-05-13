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
console.log("This creates a new subject page under app/subjects/[CODE]/page.tsx\n");

const code = await prompt("Subject code (e.g. TIT3151): ");
const title = await prompt("Subject title (e.g. Web Programming): ");
const credits = await prompt("Credit hours (e.g. 3): ");
const type = await select("Subject type:", ["general", "elective", "major"]);
const semester = await prompt("Semester offered (e.g. Year 2 Sem 1): ");
const description = await prompt("Short description (shown on listing page): ");
const github = await prompt("GitHub repo URL (leave blank if none): ");
const contributor = await prompt("Your GitHub username: ");

const dir = path.join(ROOT, "app", "subjects", code);
const file = path.join(dir, "page.tsx");

if (fs.existsSync(file)) {
    console.error(`\n❌ Subject page already exists: ${file}`);
    process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const template = `import type { Metadata } from "next";
import type { SubjectMeta } from "@/lib/types";
import {
  SubjectLayout,
  GuideSection,
  TipsSection,
  TopicsSection,
  ResourcesSection,
} from "@/components/subject/SubjectLayout";

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT THIS — subject information
// ─────────────────────────────────────────────────────────────────────────────
export const meta: SubjectMeta = {
  code: "${code}",
  title: "${title}",
  credits: ${parseInt(credits, 10) || 3},
  type: "${type}",
  semester: "${semester}",
  description: "${description}",
  ${github ? `github: "${github}",` : '// github: "",'}
  downloads: [
    // Add download items here. Upload files to R2 first via the upload tool.
    // {
    //   label: "Week 1 Slides",
    //   url: "https://r2.junn.codes/mmu/${code}/week1-slides.pdf",
    //   size: "2.4 MB",
    //   type: "slides",
    // },
  ],
  tags: [],
  updatedAt: "${new Date().toISOString().split("T")[0]}",
  contributor: "${contributor}",
};

export const metadata: Metadata = {
  title: \`\${meta.code} \${meta.title}\`,
  description: meta.description,
};

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT BELOW — write your content
//
//     Available section components:
//       <TopicsSection>  — list of topics covered in the subject
//       <GuideSection>   — study guide, notes, explanations
//       <TipsSection>    — exam tips, common mistakes
//       <ResourcesSection> — useful external links
//
//     Inside each section you can use any valid JSX/HTML.
//     See TIT3151/page.tsx for a full example.
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

fs.writeFileSync(file, template, "utf-8");

console.log(`\n✅ Created: app/subjects/${code}/page.tsx`);
console.log("\nNext steps:");
console.log("  1. Open the file and fill in the content sections");
console.log("  2. Upload any downloadable files via the R2 upload tool");
console.log("  3. Add download URLs to the meta.downloads array");
console.log("  4. Open a PR — see CONTRIBUTING.md for guidelines\n");
