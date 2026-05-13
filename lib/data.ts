import type { SubjectMeta, FypMeta, NewsPost } from "./types";

/* ─────────────────────────────────────────────────────────────────────────────
   SUBJECTS
   ─────────────────────────────────────────────────────────────────────────── */

export const subjects: SubjectMeta[] = [
    {
        code: "TIT3151",
        title: "Web Programming",
        credits: 3,
        type: "major",
        semester: "Year 3 Sem 1",
        description:
            "Client-side and server-side web development including HTML, CSS, JavaScript, and PHP.",
        tags: ["html", "css", "javascript", "php"],
        updatedAt: "2025-05-01",
    },
    {
        code: "TIT2201",
        title: "Data Structures and Algorithms",
        credits: 3,
        type: "major",
        semester: "Year 2 Sem 1",
        description:
            "Fundamental data structures, sorting algorithms, graph traversal, and complexity analysis.",
        tags: ["algorithms", "data-structures", "java", "complexity"],
        updatedAt: "2025-05-13",
    },
    {
        code: "TIM3111",
        title: "Software Engineering",
        credits: 4,
        type: "major",
        semester: "Year 3 Sem 1",
        description:
            "SDLC methodologies, UML modelling, Agile/Scrum practices, and software quality assurance.",
        tags: ["agile", "uml", "sdlc", "testing"],
        updatedAt: "2025-04-20",
    },
    {
        code: "TIS3211",
        title: "Data Science Foundations",
        credits: 4,
        type: "major",
        semester: "Year 3 Sem 2",
        description:
            "Statistical modelling, data wrangling with pandas, visualisation, and introductory machine learning.",
        tags: ["python", "pandas", "statistics", "machine-learning"],
        updatedAt: "2025-04-15",
    },
    {
        code: "TID4155",
        title: "Artificial Intelligence",
        credits: 4,
        type: "major",
        semester: "Year 4 Sem 1",
        description:
            "Search algorithms, knowledge representation, neural networks, and applied AI techniques.",
        tags: ["ai", "neural-networks", "search", "python"],
        updatedAt: "2025-03-30",
    },
    {
        code: "TIM2251",
        title: "Database Systems",
        credits: 3,
        type: "major",
        semester: "Year 2 Sem 2",
        description:
            "Relational database design, SQL, normalisation, transactions, and NoSQL fundamentals.",
        tags: ["sql", "nosql", "er-diagram", "mysql"],
        updatedAt: "2025-04-10",
    },
    {
        code: "TID2142",
        title: "Cloud Computing",
        credits: 4,
        type: "elective",
        semester: "Year 2 Sem 2",
        description:
            "Cloud service models, AWS/Azure fundamentals, containerisation with Docker, and serverless architecture.",
        tags: ["aws", "docker", "devops", "cloud"],
        updatedAt: "2025-04-05",
    },
    {
        code: "TIE2222",
        title: "Cybersecurity Principles",
        credits: 3,
        type: "elective",
        semester: "Year 2 Sem 1",
        description:
            "Network security, cryptography, ethical hacking concepts, and security audit frameworks.",
        tags: ["security", "cryptography", "networking", "linux"],
        updatedAt: "2025-03-25",
    },
    {
        code: "TIE3341",
        title: "Mobile Application Development",
        credits: 3,
        type: "elective",
        semester: "Year 3 Sem 2",
        description:
            "Cross-platform mobile development with Flutter and React Native, UI/UX for mobile contexts.",
        tags: ["flutter", "react-native", "mobile", "dart"],
        updatedAt: "2025-04-22",
    },
    {
        code: "TMN1011",
        title: "Fundamentals of IT",
        credits: 3,
        type: "general",
        semester: "Year 1 Sem 1",
        description:
            "Introduction to computing, hardware, operating systems, networks, and digital literacy.",
        tags: ["computing", "os", "networking", "basics"],
        updatedAt: "2025-04-01",
    },
    {
        code: "TMA1033",
        title: "Discrete Mathematics",
        credits: 3,
        type: "general",
        semester: "Year 1 Sem 2",
        description:
            "Logic, set theory, combinatorics, graph theory, and mathematical proof techniques.",
        tags: ["logic", "sets", "combinatorics", "proofs"],
        updatedAt: "2025-03-20",
    },
    {
        code: "TIT1121",
        title: "Programming Fundamentals",
        credits: 3,
        type: "general",
        semester: "Year 1 Sem 1",
        description:
            "Core programming concepts using Python: variables, control flow, functions, and OOP basics.",
        tags: ["python", "oop", "programming", "basics"],
        updatedAt: "2025-04-18",
    },
];

/* ─────────────────────────────────────────────────────────────────────────────
   FYP PROJECTS
   ─────────────────────────────────────────────────────────────────────────── */

export const fypProjects: FypMeta[] = [
    {
        slug: "optiroute-logistics",
        title: "OptiRoute Logistics",
        tagline: "AI-driven delivery route optimisation system using reinforcement learning.",
        studentName: "Adrian Mah",
        studentGithub: "adrianmah",
        academicYear: "2023/2024",
        stack: ["Python", "React", "Google Maps API", "FastAPI"],
        tags: ["ai", "logistics", "web"],
    },
    {
        slug: "sentinel-guard",
        title: "Sentinel Guard",
        tagline: "Real-time intrusion detection system for IoT ecosystems.",
        studentName: "Sarah Khoo",
        studentGithub: "sarahkhoo",
        academicYear: "2023/2024",
        stack: ["C++", "TensorFlow", "Raspberry Pi", "MQTT"],
        tags: ["iot", "security", "embedded"],
    },
    {
        slug: "healthsync-vr",
        title: "HealthSync VR",
        tagline: "VR-based physical rehabilitation platform with biometric feedback.",
        studentName: "Jason Lim",
        studentGithub: "jasonlim",
        academicYear: "2022/2023",
        stack: ["Unity", "C#", "Oculus SDK", "Firebase"],
        tags: ["vr", "health", "unity"],
    },
    {
        slug: "ethertrust-deeds",
        title: "EtherTrust Deeds",
        tagline: "Blockchain-secured property title management on Ethereum.",
        studentName: "Nurul Syuhada",
        studentGithub: "nurulsyuhada",
        academicYear: "2022/2023",
        stack: ["Solidity", "Web3.js", "Next.js", "IPFS"],
        tags: ["blockchain", "web3", "fintech"],
    },
    {
        slug: "agrobot-sentry",
        title: "AgroBot Sentry",
        tagline: "Autonomous pest detection drone with edge AI vision processing.",
        studentName: "William Chen",
        studentGithub: "williamchen",
        academicYear: "2021/2022",
        stack: ["PyTorch", "ROS", "Edge AI", "OpenCV"],
        tags: ["robotics", "ai", "drone"],
    },
    {
        slug: "sufi-test",
        title: "Sufi Test",
        tagline: "Ok",
        studentName: "Sufi Kai",
        studentGithub: "Suif Kai",
        academicYear: "2023/2024",
        stack: ["React"],
        tags: [],
    },
    {
        slug: "vantage-analytics",
        title: "Vantage Analytics",
        tagline: "Full-stack customer behaviour analysis platform with real-time dashboards.",
        studentName: "Siti Talib",
        studentGithub: "sititalib",
        academicYear: "2021/2022",
        stack: ["Node.js", "MongoDB", "D3.js", "Express"],
        tags: ["analytics", "fullstack", "data-vis"],
    },
];

/* ─────────────────────────────────────────────────────────────────────────────
   NEWS
   ─────────────────────────────────────────────────────────────────────────── */

export interface NewsItem extends NewsPost {
    category: "Faculty Notice" | "Academics" | "Events" | "Announcement";
}

export const newsItems: NewsItem[] = [
    {
        slug: "fyp-briefing-session-2024",
        title: "FYP Briefing Session: Requirements & Rubrics",
        date: "Oct 24, 2024",
        excerpt:
            "The upcoming briefing session will cover the final year project guidelines, including the revised marking rubrics for the 2024 cohort. Attendance is mandatory for all Final Year students.",
        author: "FIST Academic Office",
        category: "Faculty Notice",
    },
    {
        slug: "midterm-assessment-feedback-2024",
        title: "Mid-Term Assessment Feedback Period Open",
        date: "Oct 21, 2024",
        excerpt:
            "Faculty members are now releasing assessment feedback. Students are encouraged to schedule a consultation with their respective lecturers via the portal booking system.",
        author: "FIST Academic Office",
        category: "Academics",
    },
    {
        slug: "career-talk-oct-2024",
        title: "Career Talk: Navigating the Tech Industry",
        date: "Oct 18, 2024",
        excerpt:
            "Join our alumni and industry experts from leading tech firms as they share insights on current market trends and essential skills for information science graduates.",
        author: "FIST Career Centre",
        category: "Events",
    },
    {
        slug: "portal-launch-2024",
        title: "Academic Year 2024 Resource Portal Now Live",
        date: "Sep 15, 2024",
        excerpt:
            "The FIST Resource Portal has been fully updated for Academic Year 2024. New subject guides, past year papers, and FYP showcases are now available for all enrolled students.",
        author: "junn.codes",
        category: "Announcement",
    },
    {
        slug: "dean-list-sem2-2024",
        title: "Dean's List — Semester 2 2023/2024 Published",
        date: "Sep 3, 2024",
        excerpt:
            "Congratulations to the 147 students named on the Dean's List for Semester 2 of Academic Year 2023/2024. The full list is available on the student portal.",
        author: "FIST Academic Office",
        category: "Academics",
    },
    {
        slug: "hackathon-2024",
        title: "MMU FIST Hackathon 2024 — Registration Open",
        date: "Aug 28, 2024",
        excerpt:
            "Teams of 2–4 students are invited to compete in the annual 24-hour FIST Hackathon. This year's theme is Sustainable Tech. Prizes worth RM 10,000 up for grabs.",
        author: "FIST Student Society",
        category: "Events",
    },
];

/* ─────────────────────────────────────────────────────────────────────────────
   HELPERS
   ─────────────────────────────────────────────────────────────────────────── */

export function getSubjectByCode(code: string): SubjectMeta | undefined {
    return subjects.find((s) => s.code === code);
}

export function getFypBySlug(slug: string): FypMeta | undefined {
    return fypProjects.find((p) => p.slug === slug);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
    return newsItems.find((n) => n.slug === slug);
}
