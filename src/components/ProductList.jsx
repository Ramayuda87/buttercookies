import React, { useEffect, useState } from 'react'
import { fetchButterCookies } from '../lib/contentfulClient'
import ProductCard from './ProductCard'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    fetchButterCookies()
      .then(items => {
        if (mounted) setProducts(items)
      })
      .catch(err => console.error('Contentful fetch error', err))
      .finally(() => mounted && setLoading(false))

    return () => { mounted = false }
  }, [])

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <h2 className="section-title">Produk Kami</h2>
        {loading ? (
          <div className="loading">Memuat produk...</div>
        ) : products.length ? (
          <div className="product-grid">
            {products.map(item => (
              <ProductCard key={item.sys.id} product={item} />
            ))}
          </div>
        ) : (
          <p className="empty">Belum ada produk tersedia.</p>
        )}
      </div>
    </section>
  )
}
