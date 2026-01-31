import React from 'react'

const points = [
  { icon: 'fa-solid fa-seedling', title: 'Bahan Pilihan', text: 'Bahan lokal berkualitas untuk rasa alami.' },
  { icon: 'fa-solid fa-house', title: 'Homemade Premium', text: 'Dibuat secara small-batch untuk rasa autentik.' },
  { icon: 'fa-solid fa-award', title: 'Kualitas Terjamin', text: 'Proses kontrol mutu ketat, tiap batch prima.' }
]

export default function WhyMarkonah() {
  return (
    <section id="why" className="section why-section">
      <div className="container">
        <h2 className="section-title">Kenapa Markonah?</h2>
        <div className="why-grid">
          {points.map(p => (
            <div className="why-card" key={p.title}>
              <i className={`${p.icon} why-icon`} aria-hidden></i>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
