import { getAllNews } from "@/lib/news";
import { NewsFilterClient } from "@/components/news/NewsFilterClient";
import styles from "@/styles/pages/news.module.css";

export default function NewsPage() {
    const items = getAllNews();

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
            <NewsFilterClient items={items} />
        </div>
    );
}
