import fs from "fs";
import path from "path";
import type { NewsPost } from "./types";

export type NewsCategory = "Faculty Notice" | "Academics" | "Events" | "Announcement";

export interface NewsItem extends NewsPost {
    category: NewsCategory;
}

const NEWS_DIR = path.join(process.cwd(), "content", "news");

export function getAllNews(): NewsItem[] {
    return fs
        .readdirSync(NEWS_DIR)
        .filter((f) => f.endsWith(".json"))
        .map((f) => JSON.parse(fs.readFileSync(path.join(NEWS_DIR, f), "utf-8")) as NewsItem);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
    return getAllNews().find((n) => n.slug === slug);
}
