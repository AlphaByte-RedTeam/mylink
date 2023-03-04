import "./globals.css"

export const metadata = {
  title: "Andrew Virya Victorio - My Link",
  description: "A LinkTree like for my own custom link.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
