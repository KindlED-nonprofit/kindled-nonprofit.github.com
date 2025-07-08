import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KindlED - Student Mentorship Nonprofit",
  description:
    "At KindlED, we believe every student carries a spark—of potential, of purpose, of possibility. Our mission is to ensure that spark is kindled through mentorship, connection, and shared experience.",
  keywords: [
    "KindlED",
    "student mentorship program",
    "peer mentorship",
    "personalized student support",
    "academic mentorship",
    "high school mentorship",
    "free mentorship for students",
    "mentorship for growth",
    "one-on-one student mentoring",
    "student success program",
    "empower students",
    "unlocking potential",
    "academic guidance",
    "student-led initiative",
    "education equity",
    "mentoring future leaders",
    "transformative education",
    "excellence in education",
    "mentor-mentee connection",
    "growth mindset education",
    "individualized learning",
    "education for purpose",
    "medicine mentorship",
    "healthcare student mentor",
    "computer science mentorship",
    "AI student mentorship",
    "data science mentorship",
    "business mentorship for students",
    "entrepreneurship guidance",
    "liberal arts mentorship",
    "humanities mentoring",
    "law mentorship for teens",
    "public policy mentoring",
    "STEM mentorship",
    "engineering guidance",
    "compassionate mentorship",
    "student-centered learning",
    "inclusive education",
    "personalized support",
    "innovative learning solutions",
    "values-driven mentorship",
    "mentor with compassion",
    "purpose-driven education",
    "meaningful student connection",
    "kindle your spark",
    "ignite your future",
    "student empowerment",
    "inspired learning",
    "mentorship with impact",
    "unlocking student potential",
    "journey of growth",
    "spark of potential",
    "light the path",
    "flame of knowledge",
  ],

  authors: [{ name: "KindlED", url: "https://getkindled.org" }],
  robots: "index, follow",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/assets/favicon/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "KindlED",
  },
  openGraph: {
    title: "KindlED - Student Mentorship Nonprofit",
    description:
      "Connecting mentors and mentees across various academic fields to kindle potential and purpose.",
    url: "https://getkindled.org",
    siteName: "KindlED",
    images: [
      {
        url: "https://getkindled.org/assets/logo.png",
        width: 1000,
        height: 1000,
        alt: "KindlED Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KindlED - Student Mentorship Nonprofit",
    description:
      "Connecting mentors and mentees across various academic fields to kindle potential and purpose.",
    images: ["https://getkindled.org/assets/logo.png"],
  },
  alternates: {
    canonical: "https://getkindled.org",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
