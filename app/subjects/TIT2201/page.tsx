import type { Metadata } from "next";
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
    code: "TIT2201",
    title: "Data Structures and Algorithms",
    credits: 3,
    type: "major",
    semester: "Year 2 Sem 1",
    description:
        "Covers fundamental data structures (arrays, linked lists, trees, graphs, hash tables) and core algorithms including sorting, searching, and graph traversal.",
    downloads: [
        {
            label: "Week 1 — Introduction to DSA",
            url: "https://r2.junn.codes/mmu/TIT2201/week1-slides.pdf",
            size: "2.1 MB",
            type: "slides",
        },
        {
            label: "Tutorial 1 — Arrays & Linked Lists",
            url: "https://r2.junn.codes/mmu/TIT2201/tutorial-1.pdf",
            size: "0.9 MB",
            type: "tutorial",
        },
        {
            label: "Tutorial 1 — Answer Scheme",
            url: "https://r2.junn.codes/mmu/TIT2201/tutorial-1-ans.pdf",
            size: "0.7 MB",
            type: "answer",
        },
    ],
    tags: ["algorithms", "data-structures", "java", "complexity"],
    updatedAt: "2026-05-13",
    contributor: "sufikai",
};

export const metadata: Metadata = {
    title: `${meta.code} ${meta.title}`,
    description: meta.description,
};

// ─────────────────────────────────────────────────────────────────────────────
// ✏️  EDIT BELOW — write your content inside the sections
//     The layout, sidebar, and downloads are handled automatically.
//     You can use any valid JSX/HTML inside each section.
// ─────────────────────────────────────────────────────────────────────────────
export default function TIT2201() {
    return (
        <SubjectLayout meta={meta}>
            <TopicsSection>
                <ol>
                    <li>Arrays, dynamic arrays, and memory layout</li>
                    <li>Linked lists — singly, doubly, circular</li>
                    <li>Stacks and queues (array-backed and linked)</li>
                    <li>Recursion and the call stack</li>
                    <li>Sorting — bubble, insertion, merge, quick, heap</li>
                    <li>Searching — linear search, binary search</li>
                    <li>Trees — binary trees, BST, AVL, heaps</li>
                    <li>Hash tables — collision handling, load factor</li>
                    <li>Graphs — representation, BFS, DFS</li>
                    <li>Algorithm complexity — Big-O, time vs space trade-offs</li>
                </ol>
            </TopicsSection>

            <GuideSection>
                <h3>Where to start</h3>
                <p>
                    Get comfortable with recursion before anything else — trees, graphs, merge sort,
                    and quicksort all depend on it. If recursion feels shaky, spend a day tracing
                    call stacks on paper before moving on.
                </p>

                <h3>Arrays and linked lists</h3>
                <p>
                    Know the time complexity for insert, delete, and access on both. Interviewers
                    and exam questions love asking you to pick one and justify why. Arrays win on
                    random access (O(1)); linked lists win on insert/delete at a known node (O(1)
                    with pointer).
                </p>

                <h3>Sorting algorithms</h3>
                <p>
                    You need to be able to trace merge sort and quicksort by hand. For exams,
                    memorise the worst/average/best cases and whether each is stable. Merge sort is
                    O(n log n) guaranteed; quicksort degrades to O(n²) on a sorted input with naive
                    pivot selection.
                </p>

                <h3>Trees and BSTs</h3>
                <p>
                    Practice in-order, pre-order, and post-order traversals until they are muscle
                    memory. BST insert and delete are common exam questions — draw the tree state
                    after each operation.
                </p>

                <h3>Big-O analysis</h3>
                <p>
                    Drop constants, drop lower-order terms. Focus on the dominant term. Practice
                    deriving complexity from nested loops — each level of nesting multiplies. A loop
                    inside a loop over the same n is O(n²).
                </p>
            </GuideSection>

            <TipsSection>
                <ul>
                    <li>
                        Draw diagrams for every linked list and tree question — pointer manipulation
                        is almost impossible to reason about in your head.
                    </li>
                    <li>
                        For sorting, practice tracing the algorithm on a small array (5–7 elements)
                        by hand; exam questions almost always require this.
                    </li>
                    <li>
                        Hash table questions often involve showing collision resolution — know both
                        chaining and open addressing (linear probing).
                    </li>
                    <li>
                        BFS uses a queue; DFS uses a stack (or recursion). Getting these mixed up is
                        the most common graph mistake.
                    </li>
                    <li>
                        Past papers repeat Big-O derivation questions — practise deriving complexity
                        for code snippets with 2–3 nested loops.
                    </li>
                </ul>
            </TipsSection>

            <ResourcesSection>
                <ul>
                    <li>
                        <a href="https://visualgo.net" target="_blank" rel="noopener noreferrer">
                            VisuAlgo — visualise sorting, trees, and graphs step by step
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.cs.usfca.edu/~galles/visualization/Algorithms.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            USFCA Data Structure Visualizations
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://bigocheatsheet.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Big-O Cheat Sheet — complexity reference for all major structures
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://neetcode.io/roadmap"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            NeetCode Roadmap — structured DSA practice problems
                        </a>
                    </li>
                </ul>
            </ResourcesSection>
        </SubjectLayout>
    );
}
