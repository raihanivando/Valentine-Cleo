import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import MusicPlayer from '@/components/MusicPlayer'

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-dm-sans',
})

export const metadata: Metadata = {
    title: 'Happy Valentine\'s Day, Cleo ❤️',
    description: 'A special Valentine\'s Day message for you, Cleo 💕',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${dmSans.variable}`}>
                {children}
                <MusicPlayer />
            </body>
        </html>
    )
}

