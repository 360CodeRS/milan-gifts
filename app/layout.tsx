import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Milan Gifts',
  description: 'Milan Gifts - Your one-stop shop for unique and thoughtful gifts',
  icons: {
    icon: '/assets/favicon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
