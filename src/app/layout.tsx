import "./globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "Andrew Virya Victorio - My Link",
  description: "A LinkTree like for my own custom link.",
}

const inter = Inter({
  subsets: ["latin"],
  fallback: ["Arial", "sans-serif", "system-ui"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
