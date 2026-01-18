import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kölbel Kehr GmbH | Ihr Schornsteinfeger-Meisterbetrieb",
  description:
    "Kölbel Kehr GmbH - Ihr professioneller Schornsteinfegerbetrieb für Privat- und Gewerbekunden. Brandsicherheit, Feuerstättenprüfung, Energieberatung und Umweltschutz.",
  keywords: [
    "Kölbel Kehr GmbH",
    "Kölbel Kehr",
    "Schornsteinfeger",
    "Kaminkehrer",
    "Brandsicherheit",
    "Feuerstättenprüfung",
    "Energieberatung",
  ],
  icons: {
    icon: "images/schornsteinfeger-logo.png",
    apple: "images/schornsteinfeger-logo-apple.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
