import { getAllSubjects } from "@/lib/subjects";
import { SubjectsFilterClient } from "@/components/subject/SubjectsFilterClient";
import styles from "@/styles/pages/subjects.module.css";

export default function SubjectsPage() {
    const subjects = getAllSubjects();

    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <h1 className={styles.title}>Subject Catalog</h1>
                <p className={styles.subtitle}>
                    Browse the complete directory of courses offered by the Faculty of Information
                    Science and Technology. Access syllabi, notes, and past year papers.
                </p>
            </header>
            <SubjectsFilterClient subjects={subjects} />
        </div>
    );
}
