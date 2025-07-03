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
  keywords: "mentorship, education, nonprofit, students, academic support, tutoring",
  authors: [{ name: "KindlED" }],
  openGraph: {
    title: "KindlED - Student Mentorship Nonprofit",
    description: "Connecting mentors and mentees across various academic fields to kindle potential and purpose.",
    type: "website",
  },
}

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
