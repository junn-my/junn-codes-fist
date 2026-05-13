import type { Metadata } from "next";
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
    title: `${meta.code} ${meta.title}`,
    description: meta.description,
};

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT BELOW — write your content inside the sections
//     The layout, sidebar, and downloads are handled automatically.
//     You can use any valid JSX/HTML inside each section.
// ─────────────────────────────────────────────────────────────────────────────
export default function TIT3151() {
    return (
        <SubjectLayout meta={meta}>
            <TopicsSection>
                <ol>
                    <li>HTML5 structure and semantics</li>
                    <li>CSS3 — selectors, box model, flexbox, grid</li>
                    <li>JavaScript fundamentals and DOM manipulation</li>
                    <li>PHP and server-side scripting basics</li>
                    <li>Forms, validation, and simple CRUD with MySQL</li>
                </ol>
            </TopicsSection>

            <GuideSection>
                <h3>Getting started</h3>
                <p>
                    This subject is split roughly 40% theory, 60% practical. Make sure you set up a
                    local environment early — XAMPP is the recommended stack for the PHP portions.
                </p>

                <h3>HTML & CSS</h3>
                <p>
                    Focus on understanding the box model deeply — most layout bugs in assignments
                    come from margin/padding confusion. Practice building a layout from scratch
                    without looking at references.
                </p>

                <h3>JavaScript</h3>
                <p>
                    The exam typically has one question on DOM manipulation. Know how to use{" "}
                    <code>getElementById</code>, <code>addEventListener</code>, and basic form
                    validation by hand.
                </p>

                <h3>PHP + MySQL</h3>
                <p>
                    For the final assignment you will build a simple CRUD web app. Start early — the
                    database connection and prepared statements trip up most students in the last
                    week.
                </p>
            </GuideSection>

            <TipsSection>
                <ul>
                    <li>
                        Past year questions heavily favour CSS layout — practice flexbox and grid
                        side by side.
                    </li>
                    <li>
                        The PHP portion of the exam is open-notes in some semesters — confirm with
                        your lecturer.
                    </li>
                    <li>
                        Use the W3Schools sandbox for quick HTML/CSS experiments during revision,
                        but don&apos;t rely on it for JavaScript.
                    </li>
                    <li>Comment your assignment code — marks are given for readability.</li>
                </ul>
            </TipsSection>

            <ResourcesSection>
                <ul>
                    <li>
                        <a
                            href="https://developer.mozilla.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            MDN Web Docs — the gold standard reference
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CSS Tricks — Complete Guide to Flexbox
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.php.net/manual/en/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PHP Manual
                        </a>
                    </li>
                </ul>
            </ResourcesSection>
        </SubjectLayout>
    );
}
