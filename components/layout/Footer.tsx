import Link from "next/link";
import styles from "@/styles/components/Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.brandCol}>
                    <Link href="/" className={styles.brandName}>
                        FIST Resource
                    </Link>
                    <p className={styles.brandDesc}>
                        Multimedia University Faculty of Information Science and Technology resource
                        gateway — study guides, FYP showcases, and faculty updates.
                    </p>
                    <p className={styles.disclaimer}>Not affiliated with Multimedia University.</p>
                </div>

                <div className={styles.col}>
                    <p className={styles.colTitle}>Resources</p>
                    <Link href="/subjects">Subject Catalog</Link>
                    <Link href="/fyp">FYP Showcase</Link>
                    <Link href="/news">News &amp; Updates</Link>
                    <a href="https://junn.codes" target="_blank" rel="noopener noreferrer">
                        junn.codes
                    </a>
                </div>

                <div className={styles.col}>
                    <p className={styles.colTitle}>Faculty</p>
                    <a href="https://fist.mmu.edu.my" target="_blank" rel="noopener noreferrer">
                        FIST Website
                    </a>
                    <a href="https://mmls.mmu.edu.my" target="_blank" rel="noopener noreferrer">
                        Student Portal
                    </a>
                    <Link href="/contact">Contact</Link>
                </div>

                <div className={styles.col}>
                    <p className={styles.colTitle}>Legal</p>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <div className={styles.status}>
                        <span className={styles.statusDot} />
                        <span>Portal Operational</span>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© {new Date().getFullYear()} junn.codes · Built by students, for students.</p>
                <a
                    href="https://github.com/junn-my/junn-codes-fist/blob/main/CONTRIBUTING.md"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contribute on GitHub →
                </a>
            </div>
        </footer>
    );
}
