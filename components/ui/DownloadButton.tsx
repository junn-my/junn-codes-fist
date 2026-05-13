import type { DownloadItem } from "@/lib/types";
import styles from "@/styles/components/DownloadButton.module.css";

interface DownloadButtonProps {
    item: DownloadItem;
}

const typeIcons: Record<string, string> = {
    slides: "📊",
    tutorial: "📝",
    answer: "✅",
    notes: "📖",
    other: "📄",
};

export function DownloadButton({ item }: DownloadButtonProps) {
    const icon = item.type ? (typeIcons[item.type] ?? typeIcons.other) : typeIcons.other;

    return (
        <a
            href={item.url}
            download
            className={styles.btn}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className={styles.iconWrap}>{icon}</span>
            <span className={styles.info}>
                <span className={styles.label}>{item.label}</span>
                {item.size && <span className={styles.size}>{item.size}</span>}
            </span>
            <DownloadIcon />
        </a>
    );
}

function DownloadIcon() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
    );
}
