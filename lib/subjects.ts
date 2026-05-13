import fs from "fs";
import path from "path";
import type { SubjectMeta } from "./types";

const SUBJECTS_DIR = path.join(process.cwd(), "app", "subjects");

export function getAllSubjects(): SubjectMeta[] {
    return fs
        .readdirSync(SUBJECTS_DIR, { withFileTypes: true })
        .filter((e) => e.isDirectory())
        .filter((e) => fs.existsSync(path.join(SUBJECTS_DIR, e.name, "meta.json")))
        .map((e) =>
            JSON.parse(
                fs.readFileSync(path.join(SUBJECTS_DIR, e.name, "meta.json"), "utf-8")
            ) as SubjectMeta
        );
}

export function getSubjectByCode(code: string): SubjectMeta | undefined {
    return getAllSubjects().find((s) => s.code === code);
}
