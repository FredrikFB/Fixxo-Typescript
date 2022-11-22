import React from 'react'
import ProductCard from '../components/ProductCard'
import { Product} from '../models/Product'

interface PropsCard {
  title: string
  products: Product[]
}

const ProductGridSection: React.FC<PropsCard> = ({title, products = []}) => {

  return (
    <section className="product-grid">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                    products.map(product => <ProductCard key={product.articleNumber} product={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection