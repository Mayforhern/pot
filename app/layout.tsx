import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'; // Import ThemeProvider


export const metadata: Metadata = {
  title: 'Mays Pick',
  description: 'A creative portfolio website for May Mewoski, showcasing work, contact details, and theme animations with a sleek, modern design.',
}

export default function RootLayout({
  children,
}: {/* s */
  children: React.ReactNode
}) {
  return (
    
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=B612+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Inconsolata:wght@200..900&family=Orbitron:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
