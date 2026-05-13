import Link from "next/link";
import type { FypMeta } from "@/lib/types";
import styles from "@/styles/components/FypCard.module.css";

export function FypCard({ project }: { project: FypMeta }) {
    const initials = project.studentName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <Link href={`/fyp/${project.slug}`} className={styles.card}>
            {/* Image / placeholder */}
            <div className={styles.imageWrap}>
                {project.coverImage ? (
                    <img src={project.coverImage} alt={project.title} className={styles.image} />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderText}>{project.title.charAt(0)}</span>
                    </div>
                )}
                <span className={styles.yearBadge}>{project.academicYear}</span>
            </div>

            {/* Body */}
            <div className={styles.body}>
                <div>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.tagline}>{project.tagline}</p>
                </div>

                <div className={styles.student}>
                    <span className={styles.avatar}>{initials}</span>
                    <span className={styles.studentName}>{project.studentName}</span>
                </div>

                <div className={styles.stack}>
                    {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className={styles.tech}>
                            {tech}
                        </span>
                    ))}
                    {project.stack.length > 3 && (
                        <span className={styles.tech}>+{project.stack.length - 3}</span>
                    )}
                </div>

                <div className={styles.cta}>
                    View Project
                    <ArrowIcon />
                </div>
            </div>
        </Link>
    );
}

function ArrowIcon() {
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
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );
}
