import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function ProductCard({ product }) {
  const { name, description, price, category, image, featured } = product.fields

  const imageUrl =
    typeof image === 'string'
      ? image
      : image?.fields?.file?.url
      ? `https:${image.fields.file.url}`
      : '/src/assets/placeholder.jpg'

  return (
    <article className={`product-card ${featured ? 'featured' : ''}`}>
      <div className="img-wrap">
        <img src={imageUrl} alt={name} />
      </div>

      <div className="card-body">
        <div className="card-header">
          <h3>{name}</h3>
          {featured && <span className="badge">Featured</span>}
        </div>

        <p className="category">{category}</p>

        <div className="description">
          {description && documentToReactComponents(description)}
        </div>

        <div className="card-footer">
          <strong className="price">Rp {price}</strong>
          <button className="btn btn-buy">Beli</button>
        </div>
      </div>
    </article>
  )
}
