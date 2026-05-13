import type { Metadata } from "next";
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
    slug: "2023-2024-sufi-test",
    title: "Sufi Test",
    tagline: "Ok",
    studentName: "Sufi Kai",
    studentGithub: "Suif Kai",
    academicYear: "2023/2024",
    stack: ["React"],
    github: "okay",
    demo: "sd",
    // coverImage: "https://r2.junn.codes/mmu/fyp/2023-2024-sufi-test/cover.png",
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
export default function SufiTestFYP() {
    return (
        <FypLayout meta={meta}>
            <OverviewSection>
                {/* ✏️ Describe your project */}
                <p>
                    Describe what your project does, what problem it solves, and who it is for. Be
                    specific — this is your showcase.
                </p>
            </OverviewSection>

            <TechSection>
                {/* ✏️ Explain your technical choices */}
                <p>
                    Walk through the architecture, key technical decisions, and anything interesting
                    you built.
                </p>
            </TechSection>

            <ReflectionSection>
                {/* ✏️ Reflect on the experience */}
                <p>What did you learn? What was the hardest part? What would you do differently?</p>
            </ReflectionSection>
        </FypLayout>
    );
}
