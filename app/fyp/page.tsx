"use client";
import { useState, useMemo } from "react";
import { fypProjects } from "@/lib/data";
import { FypCard } from "@/components/ui/FypCard";
import styles from "@/styles/pages/fyp.module.css";

const ALL_YEARS = ["All Years", "2023/2024", "2022/2023", "2021/2022"];
const ALL_STACKS = [
    "All Technologies",
    "Python / AI",
    "React",
    "Node.js",
    "Unity / C#",
    "Blockchain",
    "Mobile",
    "Robotics",
];

export default function FypPage() {
    const [year, setYear] = useState("All Years");
    const [stack, setStack] = useState("All Technologies");

    const filtered = useMemo(() => {
        return fypProjects.filter((p) => {
            const yearMatch = year === "All Years" || p.academicYear === year;
            const stackMatch =
                stack === "All Technologies" ||
                p.stack.some((t) =>
                    t.toLowerCase().includes(stack.toLowerCase().split(" / ")[0].toLowerCase())
                ) ||
                (p.tags ?? []).some((tag) => stack.toLowerCase().includes(tag.toLowerCase()));
            return yearMatch && stackMatch;
        });
    }, [year, stack]);

    return (
        <div className={styles.page}>
            {/* ── Header ── */}
            <header className={styles.hero}>
                <h1 className={styles.title}>FYP Showcase</h1>
                <p className={styles.subtitle}>
                    Inspiring projects from MMU FIST alumni. Discover the innovative solutions and
                    technical excellence that define our graduates.
                </p>
            </header>

            {/* ── Filter bar ── */}
            <div className={styles.filterBar}>
                <div className={styles.filterFields}>
                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Academic Year</label>
                        <select
                            className={styles.filterSelect}
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            {ALL_YEARS.map((y) => (
                                <option key={y}>{y}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>Tech Stack</label>
                        <select
                            className={styles.filterSelect}
                            value={stack}
                            onChange={(e) => setStack(e.target.value)}
                        >
                            {ALL_STACKS.map((s) => (
                                <option key={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={styles.filterCount}>
                    <span className={styles.filterCountNum}>{filtered.length}</span> projects found
                </div>
            </div>

            {/* ── Grid ── */}
            <div className={styles.grid}>
                {filtered.length > 0 ? (
                    filtered.map((project) => <FypCard key={project.slug} project={project} />)
                ) : (
                    <p className={styles.empty}>No projects match the selected filters.</p>
                )}
            </div>
        </div>
    );
}
