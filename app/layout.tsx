import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
    title: {
        template: "%s · FIST @ junn.codes",
        default: "FIST Faculty Resources · junn.codes",
    },
    description:
        "A community-built resource hub for MMU FIST students. Subjects, guides, downloads, and FYP showcases — by junn.codes.",
    openGraph: {
        siteName: "FIST @ junn.codes",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main
                    style={{
                        minHeight: "calc(100vh - var(--nav-height))",
                        paddingTop: "var(--nav-height)",
                    }}
                >
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
