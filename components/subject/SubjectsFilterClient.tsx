"use client";
import { useState, useMemo } from "react";
import type { SubjectMeta } from "@/lib/types";
import { SubjectCard } from "@/components/ui/SubjectCard";
import styles from "@/styles/pages/subjects.module.css";

type Filter = "all" | "general" | "elective" | "major";

const FILTERS: { value: Filter; label: string }[] = [
    { value: "all", label: "All" },
    { value: "general", label: "General" },
    { value: "elective", label: "Elective" },
    { value: "major", label: "Major" },
];

export function SubjectsFilterClient({ subjects }: { subjects: SubjectMeta[] }) {
    const [active, setActive] = useState<Filter>("all");

    const filtered = useMemo(
        () => (active === "all" ? subjects : subjects.filter((s) => s.type === active)),
        [active, subjects]
    );

    return (
        <>
            <div className={styles.filterBar}>
                <div className={styles.filterGroup}>
                    {FILTERS.map(({ value, label }) => (
                        <button
                            key={value}
                            onClick={() => setActive(value)}
                            className={`${styles.filterBtn} ${active === value ? styles.filterBtnActive : ""}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
                <span className={styles.count}>
                    Showing <span className={styles.countBold}>{filtered.length}</span> subjects
                </span>
            </div>

            <div className={styles.grid}>
                {filtered.map((subject) => (
                    <SubjectCard key={subject.code} {...subject} />
                ))}
            </div>

            <div className={styles.cta}>
                <div className={styles.ctaCircle1} />
                <div className={styles.ctaCircle2} />
                <h2 className={styles.ctaTitle}>Stay up to date with FIST Resources</h2>
                <p className={styles.ctaDesc}>
                    Get notified when new past year papers, project showcases, or elective modules
                    are added to the portal.
                </p>
                <form className={styles.ctaForm} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your student email"
                        className={styles.ctaInput}
                    />
                    <button type="submit" className={styles.ctaSubmit}>
                        Subscribe
                    </button>
                </form>
            </div>
        </>
    );
}
