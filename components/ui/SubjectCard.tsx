import Link from "next/link";
import type { SubjectMeta } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import styles from "@/styles/components/SubjectCard.module.css";

type SubjectCardProps = Pick<SubjectMeta, "code" | "title" | "credits" | "type" | "semester">;

export function SubjectCard({ code, title, credits, type, semester }: SubjectCardProps) {
    return (
        <Link href={`/subjects/${code}`} className={`${styles.card} ${styles[type]}`}>
            <div className={styles.top}>
                <span className={styles.code}>{code}</span>
                <Badge type={type} />
            </div>

            <h3 className={styles.title}>{title}</h3>

            <div className={styles.meta}>
                <span className={styles.credits}>
                    <ClockIcon />
                    {credits} Credit Hours
                </span>
            </div>

            <div className={styles.footer}>
                {semester && <span className={styles.semester}>{semester}</span>}
                <span className={styles.explore}>
                    Explore
                    <ArrowIcon />
                </span>
            </div>
        </Link>
    );
}

function ClockIcon() {
    return (
        <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
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
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}
