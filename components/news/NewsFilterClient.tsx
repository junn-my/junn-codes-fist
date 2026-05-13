"use client";
import { useState, useMemo } from "react";
import type { NewsItem } from "@/lib/news";
import { NewsCard } from "@/components/ui/NewsCard";
import styles from "@/styles/pages/news.module.css";

const CATEGORIES = ["All", "Faculty Notice", "Academics", "Events", "Announcement"] as const;
type Category = (typeof CATEGORIES)[number];

export function NewsFilterClient({ items }: { items: NewsItem[] }) {
    const [active, setActive] = useState<Category>("All");

    const filtered = useMemo(
        () => (active === "All" ? items : items.filter((n) => n.category === active)),
        [active, items]
    );

    return (
        <>
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
                {filtered.map((post) => (
                    <NewsCard
                        key={post.slug}
                        post={post}
                        accent={post.category === "Academics" ? "error" : "primary"}
                    />
                ))}
            </div>
        </>
    );
}
