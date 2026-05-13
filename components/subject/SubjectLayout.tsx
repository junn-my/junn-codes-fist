import type { SubjectMeta } from "@/lib/types";
import styles from "@/styles/components/SubjectLayout.module.css";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Badge } from "@/components/ui/Badge";

interface SubjectLayoutProps {
    meta: SubjectMeta;
    children: React.ReactNode;
}

export function SubjectLayout({ meta, children }: SubjectLayoutProps) {
    return (
        <div className={styles.page}>
            {/* ── Header ── */}
            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <div className={styles.headerMeta}>
                        <Badge type={meta.type} />
                        {meta.semester && <span className={styles.semester}>{meta.semester}</span>}
                    </div>

                    <p className={styles.code}>{meta.code}</p>
                    <h1 className={styles.title}>{meta.title}</h1>
                    <p className={styles.description}>{meta.description}</p>

                    <div className={styles.headerActions}>
                        {meta.github && (
                            <a
                                href={meta.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.githubLink}
                            >
                                <GitHubIcon />
                                View on GitHub
                            </a>
                        )}
                        {meta.contributor && (
                            <span className={styles.contributor}>
                                Maintained by{" "}
                                <a
                                    href={`https://github.com/${meta.contributor}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @{meta.contributor}
                                </a>
                            </span>
                        )}
                    </div>
                </div>
            </header>

            {/* ── Body ── */}
            <div className={styles.body}>
                <div className={styles.content}>{children}</div>

                {/* ── Sidebar ── */}
                <aside className={styles.sidebar}>
                    {meta.downloads && meta.downloads.length > 0 && (
                        <div className={styles.sidebarCard}>
                            <h2 className={styles.sidebarTitle}>
                                <FolderIcon />
                                Essential Resources
                            </h2>
                            <div className={styles.downloads}>
                                {meta.downloads.map((item, i) => (
                                    <DownloadButton key={i} item={item} />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className={styles.sidebarCard}>
                        {meta.tags && meta.tags.length > 0 && (
                            <div className={styles.tags}>
                                <p className={styles.tagsLabel}>Topics</p>
                                <div className={styles.tagsList}>
                                    {meta.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {meta.updatedAt && (
                            <p className={styles.updated}>
                                Updated{" "}
                                {new Date(meta.updatedAt).toLocaleDateString("en-MY", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
}

/* ── Section components ──────────────────────────────────────────────────── */

export function TopicsSection({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <span className={styles.sectionNum} aria-hidden="true">
                    01
                </span>
                Topics Covered
            </h2>
            <div className={styles.sectionBody}>{children}</div>
        </section>
    );
}

export function GuideSection({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <span className={styles.sectionNum} aria-hidden="true">
                    02
                </span>
                Study Guide
            </h2>
            <div className={`${styles.sectionBody} ${styles.guideBody}`}>{children}</div>
        </section>
    );
}

export function TipsSection({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <span
                    className={`${styles.sectionNum} ${styles.sectionNumAccent}`}
                    aria-hidden="true"
                >
                    03
                </span>
                Exam Tips
            </h2>
            <div className={styles.sectionBody}>{children}</div>
        </section>
    );
}

export function ResourcesSection({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                <span className={styles.sectionNum} aria-hidden="true">
                    04
                </span>
                External Resources
            </h2>
            <div className={styles.sectionBody}>{children}</div>
        </section>
    );
}

/* ── Icons ───────────────────────────────────────────────────────────────── */

function GitHubIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function FolderIcon() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
    );
}
