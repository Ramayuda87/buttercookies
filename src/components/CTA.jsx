import React from 'react'

export default function CTA() {
  const wa = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${import.meta.env.VITE_WHATSAPP_TEXT}`
  return (
    <section className="section cta-section">
      <div className="container cta-inner">
        <h2 className="section-title cta-title">Siap mencicipi Markonah?</h2>
        <p className="cta-sub">Pesan sekarang dan nikmati rasa butter cookies yang berbeda.</p>
        <a className="btn btn-primary btn-large" href={wa}>Pesan via WhatsApp</a>
      </div>
    </section>
  )
}
