import type { SubjectType } from "@/lib/types";
import styles from "@/styles/components/Badge.module.css";

interface BadgeProps {
    type: SubjectType;
}

export function Badge({ type }: BadgeProps) {
    return (
        <span className={`${styles.badge} ${styles[type]}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
    );
}
