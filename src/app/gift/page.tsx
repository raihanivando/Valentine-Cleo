import Link from 'next/link'


export default function GiftPage() {
    return (
        <div className="gift-container">
            <header className="gift-header">
                <Link href="/" className="back-button">
                    ← Kembali
                </Link>
                <h2 className="gift-title">For You, Cleo</h2>
                <div style={{ width: '110px' }} />
            </header>
            <div className="image-viewer">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/Val's_CleoD(2).png"
                    alt="Valentine's Day Gift for Cleo"
                    className="gift-image"
                />
            </div>
        </div>
    )
}

