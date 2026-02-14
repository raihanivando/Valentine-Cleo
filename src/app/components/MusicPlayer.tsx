'use client'

import { useState, useRef, useEffect } from 'react'

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showTooltip, setShowTooltip] = useState(true)
    const audioRef = useRef<HTMLAudioElement | null>(null)

    useEffect(() => {
        audioRef.current = new Audio('/HER_-_Best_Part_CeeNaija.com_.mp3')
        audioRef.current.loop = true
        audioRef.current.volume = 0.5

        // Hide tooltip after 4 seconds
        const timer = setTimeout(() => setShowTooltip(false), 4000)

        return () => {
            clearTimeout(timer)
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current = null
            }
        }
    }, [])

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
        setShowTooltip(false)
    }

    return (
        <div className="music-player">
            {showTooltip && (
                <div className="music-tooltip">
                    🎵 Play &quot;Best Part&quot;
                </div>
            )}
            <button
                className={`music-btn ${isPlaying ? 'playing' : ''}`}
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
                {isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>
            {isPlaying && (
                <div className="music-visualizer">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            )}
        </div>
    )
}
