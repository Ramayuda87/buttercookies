import React from 'react'

const testimonials = [
  { name: 'Siti', text: 'Teksturnya renyah sekali, cocok untuk hadiah.', rating: 5 },
  { name: 'Rian', text: 'Rasanya homey dan tidak terlalu manis.', rating: 4 },
  { name: 'Maya', text: 'Kemasan elegan dan pelayanan cepat.', rating: 5 }
]

export default function SocialProof() {
  return (
    <section id="social" className="section social-section">
      <div className="container">
        <h2 className="section-title">Apa kata pelanggan</h2>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <blockquote className="testi-card" key={i}>
              <p className="testi-text">“{t.text}”</p>
              <div className="testi-meta">{t.name} • {Array.from({length: t.rating}).map((_,k)=> <i key={k} className="fa-solid fa-star" />)}</div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
