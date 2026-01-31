import React from 'react'

export default function Hero() {
  const wa = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${import.meta.env.VITE_WHATSAPP_TEXT}`
  const heroImg = 'https://res.cloudinary.com/dvt3sabmz/image/upload/v1769789641/Classic_y9qrpg.png'

  return (
    <section id="hero" className="hero section">
      <div className="container hero-inner">
        {/* Left column: copy */}
        <div className="hero-text">
          <h2 className="headline">Markonah — Butter Cookies</h2>
          <p className="tagline">Rasa otentik, tekstur renyah, sentuhan homemade yang tak terlupakan.</p>
          <p className="lead">Dibuat dari bahan pilihan, dipanggang dengan hati — cookies premium untuk momen spesialmu.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={wa}>Beli Sekarang</a>
            <a className="btn btn-ghost" href="#products">Lihat Produk</a>
          </div>
        </div>

        {/* Right column: image */}
        <div className="hero-media" aria-hidden>
          <img className="hero-image" style={{width:"80%"}} src={heroImg} alt="Kotak butter cookies Markonah" />
        </div>
      </div>
    </section>
  )
}
