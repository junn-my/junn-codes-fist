import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fypProjects, getFypBySlug } from "@/lib/data";
import {
    FypLayout,
    OverviewSection,
    TechSection,
    ReflectionSection,
} from "@/components/fyp/FypLayout";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return fypProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getFypBySlug(slug);
    if (!project) return {};
    return {
        title: `${project.title} — FYP Showcase`,
        description: project.tagline,
    };
}

export default async function FypDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getFypBySlug(slug);
    if (!project) notFound();

    return (
        <FypLayout meta={project}>
            <OverviewSection>
                <p>
                    {project.tagline} This project was completed as part of the Bachelor of
                    Information Technology (Hons) Final Year Project requirements at Multimedia
                    University, Faculty of Information Science &amp; Technology.
                </p>
                <p>
                    The project addresses a real-world problem through applied research and software
                    engineering best practices. The system was developed, tested, and documented
                    over two semesters under faculty supervision.
                </p>
            </OverviewSection>

            <TechSection>
                <h3>Primary Technologies</h3>
                <p>
                    Built using the following stack: <strong>{project.stack.join(", ")}</strong>.
                </p>
                <h3>Architecture</h3>
                <p>
                    The system follows a modular architecture designed for scalability and
                    maintainability. Each component is independently testable and deployable.
                </p>
            </TechSection>

            <ReflectionSection>
                <p>
                    This FYP was a challenging but rewarding experience. The project pushed the
                    boundaries of what I had learned in class and required independent research into
                    cutting-edge methodologies.
                </p>
                <p>
                    I would like to thank my supervisor and the FIST faculty for their continued
                    guidance throughout the project duration.
                </p>
            </ReflectionSection>
        </FypLayout>
    );
}
