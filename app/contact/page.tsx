import type { Metadata } from "next";
import styles from "@/styles/pages/contact.module.css";

export const metadata: Metadata = {
    title: "Contact — FIST Resource",
    description: "Get in touch with the MMU FIST faculty or contribute to the resource portal.",
};

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <p className={styles.eyebrow}>Get in Touch</p>
                <h1 className={styles.title}>Contact &amp; Contribute</h1>
                <p className={styles.subtitle}>
                    Reach out to the FIST faculty for academic enquiries, or join the student-led
                    effort to make this portal better for everyone.
                </p>
            </header>

            <div className={styles.body}>
                {/* ── Left: contact cards ── */}
                <div className={styles.cards}>
                    <a
                        href="https://fit.mmu.edu.my"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <div className={styles.cardIcon}>
                            <GlobeIcon />
                        </div>
                        <div>
                            <p className={styles.cardLabel}>Faculty Website</p>
                            <p className={styles.cardValue}>fit.mmu.edu.my</p>
                            <p className={styles.cardMeta}>
                                Official Faculty of Information Science &amp; Technology portal
                            </p>
                        </div>
                    </a>

                    <a href="mailto:fist@mmu.edu.my" className={styles.card}>
                        <div className={styles.cardIcon}>
                            <MailIcon />
                        </div>
                        <div>
                            <p className={styles.cardLabel}>General Enquiries</p>
                            <p className={styles.cardValue}>fist@mmu.edu.my</p>
                            <p className={styles.cardMeta}>
                                For academic and administrative queries. Response within 2 working
                                days.
                            </p>
                        </div>
                    </a>

                    <div className={styles.card} style={{ cursor: "default" }}>
                        <div className={styles.cardIcon}>
                            <LocationIcon />
                        </div>
                        <div>
                            <p className={styles.cardLabel}>Campus Address</p>
                            <p className={styles.cardValue}>MMU Cyberjaya Campus</p>
                            <p className={styles.cardMeta}>
                                Persiaran Multimedia, 63100 Cyberjaya, Selangor, Malaysia.
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://mmls.mmu.edu.my"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <div className={styles.cardIcon}>
                            <PortalIcon />
                        </div>
                        <div>
                            <p className={styles.cardLabel}>Student Portal</p>
                            <p className={styles.cardValue}>mmls.mmu.edu.my</p>
                            <p className={styles.cardMeta}>
                                Multimedia Learning System — access your course materials and
                                results.
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://github.com/junn-codes/mmu-junn/issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <div className={styles.cardIcon}>
                            <BugIcon />
                        </div>
                        <div>
                            <p className={styles.cardLabel}>Report an Issue</p>
                            <p className={styles.cardValue}>GitHub Issues</p>
                            <p className={styles.cardMeta}>
                                Found a broken link or incorrect info? Open an issue on GitHub.
                            </p>
                        </div>
                    </a>
                </div>

                {/* ── Right: contribute panel ── */}
                <div className={styles.contribute}>
                    <h2 className={styles.contributeTitle}>Want to contribute?</h2>
                    <p className={styles.contributeDesc}>
                        This portal is maintained by students, for students. Adding a subject guide,
                        uploading past year papers, or submitting your FYP project takes just a few
                        minutes and helps hundreds of students every semester.
                    </p>

                    <div className={styles.contributeSteps}>
                        <div className={styles.step}>
                            <span className={styles.stepNum}>1</span>
                            <span className={styles.stepText}>
                                Fork the <strong style={{ color: "#fff" }}>mmu-junn</strong>{" "}
                                repository on GitHub.
                            </span>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNum}>2</span>
                            <span className={styles.stepText}>
                                Run{" "}
                                <code
                                    style={{
                                        color: "#fff",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "12px",
                                    }}
                                >
                                    npm run new:subject
                                </code>{" "}
                                or{" "}
                                <code
                                    style={{
                                        color: "#fff",
                                        fontFamily: "var(--font-mono)",
                                        fontSize: "12px",
                                    }}
                                >
                                    npm run new:fyp
                                </code>{" "}
                                to scaffold your page.
                            </span>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNum}>3</span>
                            <span className={styles.stepText}>
                                Fill in the content, push your branch, and open a Pull Request.
                            </span>
                        </div>
                        <div className={styles.step}>
                            <span className={styles.stepNum}>4</span>
                            <span className={styles.stepText}>
                                A maintainer will review and merge within 48 hours.
                            </span>
                        </div>
                    </div>

                    <a
                        href="https://github.com/junn-codes/mmu-junn/blob/main/CONTRIBUTING.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contributeBtn}
                    >
                        <GitHubIcon />
                        Read the Contribution Guide
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ── Icons ───────────────────────────────────────────────────────────────── */
function GlobeIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
    );
}
function MailIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    );
}
function LocationIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
function PortalIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
    );
}
function BugIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2l1.5 1.5" />
            <path d="M14.5 3.5L16 2" />
            <path d="M9 7.5A3 3 0 0115 7.5" />
            <path d="M9 7.5c-.83 0-1.5.67-1.5 1.5v.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5" />
            <path d="M12 10.5v9" />
            <path d="M7.5 14h9" />
            <path d="M4 10l2 1" />
            <path d="M20 10l-2 1" />
            <path d="M4 19l2-1" />
            <path d="M20 19l-2-1" />
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
