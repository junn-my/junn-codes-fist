import fs from "fs";
import path from "path";
import type { FypMeta } from "./types";

const FYP_DIR = path.join(process.cwd(), "app", "fyp");

export function getAllFyp(): FypMeta[] {
    return fs
        .readdirSync(FYP_DIR, { withFileTypes: true })
        .filter((e) => e.isDirectory() && !e.name.startsWith("["))
        .filter((e) => fs.existsSync(path.join(FYP_DIR, e.name, "meta.json")))
        .map((e) =>
            JSON.parse(
                fs.readFileSync(path.join(FYP_DIR, e.name, "meta.json"), "utf-8")
            ) as FypMeta
        );
}

export function getFypBySlug(slug: string): FypMeta | undefined {
    return getAllFyp().find((p) => p.slug === slug);
}
