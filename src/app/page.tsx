'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
    const [showTransition, setShowTransition] = useState(false)

    const handleOpenGift = () => {
        setShowTransition(true)
        setTimeout(() => {
            router.push('/gift')
        }, 800)
    }

    return (
        <>
            <div className="landing-container">
                {/* Floating hearts */}
                <div className="hearts-bg">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <span key={i} className="heart">
                            {i % 3 === 0 ? '💕' : i % 3 === 1 ? '❤️' : '💗'}
                        </span>
                    ))}
                </div>

                {/* Sparkle particles */}
                <div className="sparkles">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <span key={i} className="sparkle" />
                    ))}
                </div>

                {/* Main content */}
                <div className="content-card">
                    <div className="date-badge">14 February 2026</div>
                    <span className="big-heart">💝</span>
                    <h1 className="title">
                        For You,
                        <span className="title-name">Cleo ✨</span>
                    </h1>
                    <button className="cta-button" onClick={handleOpenGift}>
                        <span>Open Your Gift</span>
                        <span>💌</span>
                    </button>
                </div>

            </div>

            {/* Transition overlay */}
            {showTransition && (
                <div className="transition-overlay active">
                    <span className="transition-heart">💝</span>
                </div>
            )}
        </>
    )
}
