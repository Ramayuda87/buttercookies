import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyMarkonah from './components/WhyMarkonah'
import ProductList from './components/ProductList'
import CTA from './components/CTA'
import SocialProof from './components/SocialProof'
import BrandStory from './components/BrandStory'

export default function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <WhyMarkonah />
        <ProductList />
        <SocialProof />
        <BrandStory />
        <CTA />
      </main>
    </div>
  )
}
