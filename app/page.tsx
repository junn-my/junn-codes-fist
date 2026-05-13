import type { Metadata } from "next";
import Link from "next/link";
import { getAllNews } from "@/lib/news";
import { NewsCard } from "@/components/ui/NewsCard";
import styles from "@/styles/pages/home.module.css";
import { APP_VERSION, ANNOUNCEMENT_TEXT } from "@/appversion";

export const metadata: Metadata = {
    title: "FIST Resource — MMU Faculty of Information Science & Technology",
    description:
        "Study guides, FYP showcases, and faculty updates for MMU FIST students. Community-built, freely available.",
};

export default function HomePage() {
    const latestNews = getAllNews().slice(0, 3);

    return (
        <main>
            {/* ── Hero ── */}
            <section className={styles.hero}>
                <div className={styles.announcement}>
                    <span className={styles.announcementBadge}>v{APP_VERSION}</span>
                    <span className={styles.announcementText}>{ANNOUNCEMENT_TEXT}</span>
                </div>

                <h1 className={styles.heroTitle}>
                    The Community Hub for
                    <br />
                    <a 
                        href="https://www.mmu.edu.my/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.mmuLink}
                    >
                    <span className="mmublue">MM</span><span className="mmured">U</span></a> FIST Students.
                </h1>

                <p className={styles.heroSub}>
                    Study guides, FYP showcases, and faculty updates — all in one place.
                    Streamlining your academic journey with a student-first approach.
                </p>

                <div className={styles.heroCtas}>
                    <Link href="/subjects" className={styles.btnPrimary}>
                        Browse Subjects
                        <BooksIcon />
                    </Link>
                    <Link href="/fyp" className={styles.btnSecondary}>
                        FYP Showcase
                        <RocketIcon />
                    </Link>
                </div>
            </section>

            {/* ── Features strip ── */}
            <section className={styles.features}>
                <div className={styles.featureGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            <BoltIcon />
                        </div>
                        <div>
                            <p className={styles.featureTitle}>Instant Access</p>
                            <p className={styles.featureDesc}>
                                Optimised for speed. Find your learning materials in under a second.
                            </p>
                        </div>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            <UpdateIcon />
                        </div>
                        <div>
                            <p className={styles.featureTitle}>Weekly Updates</p>
                            <p className={styles.featureDesc}>
                                New study materials and faculty announcements synced regularly.
                            </p>
                        </div>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                            <ShieldIcon />
                        </div>
                        <div>
                            <p className={styles.featureTitle}>Open Access</p>
                            <p className={styles.featureDesc}>
                                All core resources are freely available to every FIST student.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Latest News ── */}
            <section className={styles.newsSection}>
                <div className={styles.newsSectionInner}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <p className={styles.sectionEyebrow}>Updates</p>
                            <h2 className={styles.sectionTitle}>Latest News</h2>
                        </div>
                        <Link href="/news" className={styles.viewAll}>
                            View All Posts
                            <ChevronRight />
                        </Link>
                    </div>

                    <div className={styles.newsGrid}>
                        {latestNews.map((post, i) => (
                            <NewsCard
                                key={post.slug}
                                post={post}
                                accent={i === 1 ? "error" : "primary"}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contribute CTA ── */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaPanel}>
                    <div className={styles.ctaGlow} />
                    <div className={styles.ctaDot} />

                    <div className={styles.ctaText}>
                        <h2 className={styles.ctaTitle}>Built by students, for students.</h2>
                        <p className={styles.ctaDesc}>
                            This portal is an open-source project maintained by the MMU FIST
                            community. Found an error or want to share a resource? Join us on GitHub
                            and help make this better for everyone.
                        </p>
                        <div className={styles.ctaButtons}>
                            <a
                                href="https://github.com/junn-my/junn-codes-fist"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.btnCtaPrimary}
                            >
                                <GitHubIcon />
                                Contribute on GitHub
                            </a>
                        </div>
                    </div>

                    <div className={styles.ctaVisual}>
                        <div className={styles.ctaCircle}>
                            <div className={styles.ctaCircleInner}>
                                <span className={styles.ctaCircleIcon}>👥</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Bento subjects preview ── */}
            <section className={styles.bentoSection}>
                <div className={styles.bentoHeader}>
                    <div>
                        <p className={styles.sectionEyebrow}>Explore</p>
                        <h2 className={styles.sectionTitle}>Browse by Discipline</h2>
                    </div>
                    <Link href="/subjects" className={styles.viewAll}>
                        All Subjects <ChevronRight />
                    </Link>
                </div>

                <div className={styles.bento}>
                    {/* Featured */}
                    <Link
                        href="/subjects?type=major"
                        className={`${styles.bentoCard} ${styles.bentoFeatured}`}
                    >
                        <div>
                            <p className={styles.bentoEyebrow}>Core Major</p>
                            <h3 className={styles.bentoTitle}>Computer Science & Engineering</h3>
                            <p className={styles.bentoDesc}>
                                Data structures, algorithms, software engineering, databases, and AI
                                — the technical foundation of every FIST degree.
                            </p>
                        </div>
                        <div className={styles.bentoFooter}>
                            <div className={styles.bentoAvatars}>
                                {["JS", "CS", "AI", "+4"].map((label, i) => (
                                    <span
                                        key={i}
                                        className={styles.bentoAvatar}
                                        style={{
                                            background:
                                                i % 2 === 0
                                                    ? "var(--color-primary)"
                                                    : "var(--color-error)",
                                        }}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                            <span className={styles.bentoArrow}>
                                <ChevronRight />
                            </span>
                        </div>
                    </Link>

                    {/* Trending */}
                    <Link
                        href="/subjects?type=elective"
                        className={`${styles.bentoCard} ${styles.bentoHighlight}`}
                    >
                        <div>
                            <p className={styles.bentoEyebrow}>Trending</p>
                            <p className={styles.bentoTitleSm}>Artificial Intelligence</p>
                            <p className={styles.bentoDesc}>
                                ML models and neural network foundations.
                            </p>
                        </div>
                        <span className={styles.bentoArrow}>
                            <ChevronRight />
                        </span>
                    </Link>

                    {/* Cybersecurity */}
                    <Link href="/subjects/TIE2222" className={styles.bentoCard}>
                        <div>
                            <p className={styles.bentoTitleSm}>Cybersecurity</p>
                            <p className={styles.bentoDesc}>Network defence and cryptography.</p>
                        </div>
                        <span className={styles.bentoArrow}>
                            <ChevronRight />
                        </span>
                    </Link>

                    {/* Cloud */}
                    <Link href="/subjects/TID2142" className={styles.bentoCard}>
                        <div>
                            <p className={styles.bentoTitleSm}>Cloud Computing</p>
                            <p className={styles.bentoDesc}>AWS, Docker, and serverless.</p>
                        </div>
                        <span className={styles.bentoArrow}>
                            <ChevronRight />
                        </span>
                    </Link>

                    {/* All subjects CTA */}
                    <Link href="/subjects" className={`${styles.bentoCard} ${styles.bentoDark}`}>
                        <div
                            style={{
                                textAlign: "center",
                                margin: "auto",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "var(--space-3)",
                            }}
                        >
                            <span style={{ fontSize: "28px" }}>+</span>
                            <p className={styles.bentoTitleSm}>All Subjects</p>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}

/* ── Inline SVG icons ────────────────────────────────────────────────────── */
function BooksIcon() {
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
        >
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
    );
}
function RocketIcon() {
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
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
        </svg>
    );
}
function BoltIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    );
}
function UpdateIcon() {
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
        >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
        </svg>
    );
}
function ShieldIcon() {
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
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    );
}
function ChevronRight() {
    return (
        <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}
function GitHubIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}
