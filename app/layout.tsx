import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edion - Empowering Educators, Inspiring Learners',
  description: 'Edion is revolutionizing education with AI-powered solutions that reduce administrative burdens and enhance learning experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-white`}>{children}</body>
    </html>
  )
}