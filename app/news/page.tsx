"use client";
import { useState, useMemo } from "react";
import { newsItems } from "@/lib/data";
import { NewsCard } from "@/components/ui/NewsCard";
import styles from "@/styles/pages/news.module.css";

const CATEGORIES = ["All", "Faculty Notice", "Academics", "Events", "Announcement"] as const;
type Category = (typeof CATEGORIES)[number];

export default function NewsPage() {
    const [active, setActive] = useState<Category>("All");

    const filtered = useMemo(
        () => (active === "All" ? newsItems : newsItems.filter((n) => n.category === active)),
        [active]
    );

    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <p className={styles.eyebrow}>Updates</p>
                <h1 className={styles.title}>News &amp; Announcements</h1>
                <p className={styles.subtitle}>
                    Faculty notices, academic updates, and upcoming events from the MMU FIST
                    community.
                </p>
            </header>

            <div className={styles.filters}>
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`${styles.filterBtn} ${active === cat ? styles.filterBtnActive : ""}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filtered.map((post, i) => (
                    <NewsCard
                        key={post.slug}
                        post={post}
                        accent={post.category === "Academics" ? "error" : "primary"}
                    />
                ))}
            </div>
        </div>
    );
}
