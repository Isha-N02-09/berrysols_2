import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Lora } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Same Day Me — Web Design & Development Case Study',
  description:
    'Rebuilding the digital front door for Dubai’s only certified ZAGA Center, turning a 25-plus page medical service catalogue into a calm, trustworthy booking experience.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${lora.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
