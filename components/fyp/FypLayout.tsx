import type { FypMeta } from "@/lib/types";
import styles from "@/styles/components/FypLayout.module.css";

interface FypLayoutProps {
    meta: FypMeta;
    children: React.ReactNode;
}

export function FypLayout({ meta, children }: FypLayoutProps) {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                {meta.coverImage && (
                    <div
                        className={styles.cover}
                        style={{ backgroundImage: `url(${meta.coverImage})` }}
                    />
                )}
                <div className={styles.headerInner}>
                    <p className={styles.year}>{meta.academicYear}</p>
                    <h1 className={styles.title}>{meta.title}</h1>
                    <p className={styles.tagline}>{meta.tagline}</p>

                    <div className={styles.student}>
                        <div className={styles.avatar}>
                            {meta.studentName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <p className={styles.studentName}>{meta.studentName}</p>
                            {meta.studentGithub && (
                                <a
                                    href={`https://github.com/${meta.studentGithub}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.studentGithub}
                                >
                                    @{meta.studentGithub}
                                </a>
                            )}
                        </div>
                    </div>

                    <div className={styles.stack}>
                        {meta.stack.map((tech) => (
                            <span key={tech} className={styles.tech}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        {meta.github && (
                            <a
                                href={meta.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnPrimary}
                            >
                                View on GitHub →
                            </a>
                        )}
                        {meta.demo && (
                            <a
                                href={meta.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnSecondary}
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </header>

            <div className={styles.body}>{children}</div>
        </div>
    );
}

export function OverviewSection({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <div className={styles.sectionBody}>{children}</div>
        </section>
    );
}

export function TechSection({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Details</h2>
            <div className={styles.sectionBody}>{children}</div>
        </section>
    );
}

export function ReflectionSection({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Reflection</h2>
            <div className={styles.sectionBody}>{children}</div>
        </section>
    );
}
