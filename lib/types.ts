// ─── Subject types ────────────────────────────────────────────────────────────

export type SubjectType = "general" | "elective" | "major";

export interface DownloadItem {
    label: string;
    /** Full R2 URL — e.g. https://r2.junn.codes/mmu/TIT3151/week1-slides.pdf */
    url: string;
    /** Optional: file size display string e.g. "2.4 MB" */
    size?: string;
    type?: "slides" | "tutorial" | "answer" | "notes" | "other";
}

export interface SubjectMeta {
    /** e.g. "TIT3151" */
    code: string;
    /** Full name e.g. "Web Programming" */
    title: string;
    credits: number;
    type: SubjectType;
    /** Semester offered e.g. "Year 2 Sem 1" */
    semester?: string;
    /** Short blurb shown on the subjects listing page */
    description: string;
    /** GitHub repo for assignment/project reference */
    github?: string;
    downloads?: DownloadItem[];
    /** Tags for filtering e.g. ["web", "javascript"] */
    tags?: string[];
    /** Last updated ISO date string */
    updatedAt?: string;
    /** GitHub username of the primary contributor */
    contributor?: string;
}

// ─── FYP types ────────────────────────────────────────────────────────────────

export interface FypMeta {
    /** URL-safe slug e.g. "smart-campus-app-2024" */
    slug: string;
    title: string;
    /** One-liner shown on the index card */
    tagline: string;
    studentName: string;
    studentGithub?: string;
    /** e.g. "2023/2024" */
    academicYear: string;
    /** Primary technology stack */
    stack: string[];
    github?: string;
    /** Live demo URL if deployed */
    demo?: string;
    /** Cover image — can be R2 URL or relative /public path */
    coverImage?: string;
    tags?: string[];
}

// ─── News types ───────────────────────────────────────────────────────────────

export interface NewsPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author?: string;
}
