import { getAllFyp } from "@/lib/fyp";
import { FypFilterClient } from "@/components/fyp/FypFilterClient";
import styles from "@/styles/pages/fyp.module.css";

export default function FypPage() {
    const projects = getAllFyp();

    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <h1 className={styles.title}>FYP Showcase</h1>
                <p className={styles.subtitle}>
                    Inspiring projects from MMU FIST alumni. Discover the innovative solutions and
                    technical excellence that define our graduates.
                </p>
            </header>
            <FypFilterClient projects={projects} />
        </div>
    );
}
