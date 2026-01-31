import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#hero" className="brand">Markonah</a>
        <nav className="nav">
          <a href="#why">Keunggulan</a>
          <a href="#products">Produk</a>
          <a href="#social">Testimoni</a>
          <a href="#story">Tentang</a>
        </nav>
      </div>
    </header>
  )
}
