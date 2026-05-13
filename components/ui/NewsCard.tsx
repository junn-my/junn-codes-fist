import Link from "next/link";
import type { NewsItem } from "@/lib/news";
import styles from "@/styles/components/NewsCard.module.css";

interface NewsCardProps {
    post: NewsItem;
    accent?: "primary" | "error";
}

export function NewsCard({ post, accent = "primary" }: NewsCardProps) {
    return (
        <Link
            href={`/news/${post.slug}`}
            className={`${styles.card} ${accent === "error" ? styles.accentError : styles.accentPrimary}`}
        >
            <div className={styles.top}>
                <span
                    className={`${styles.tag} ${accent === "error" ? styles.tagError : styles.tagPrimary}`}
                >
                    {post.category}
                </span>
                <span className={styles.date}>{post.date}</span>
            </div>

            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <span className={styles.readMore}>
                {post.category === "Events"
                    ? "Join Session"
                    : post.category === "Faculty Notice"
                      ? "Read Notice"
                      : "Read More"}
                <ArrowIcon />
            </span>
        </Link>
    );
}

function ArrowIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
    );
}
