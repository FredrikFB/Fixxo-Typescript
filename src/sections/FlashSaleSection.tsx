import React from 'react'
import ProductCard from '../components/ProductCard'
import { Product} from '../models/Product'

interface Props {
    products: Product[]
}

const FlashSaleSection:React.FC<Props> = ({products}) => {

  return (
    <section>
        <div className="flash-sale-left">
            <div className="container">
                <div className="square">
                    <div className="square-text">
                        <h2>2 FOR USD $29</h2>
                        <button className="btn-white">FLASH SALE</button>
                    </div>
                </div>
                <div className="liten">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                        products.slice(0, 4).map(product => <ProductCard key={product.articleNumber} product={product} />)
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="flash-sale-right">
            <div className="container">
                <div className="liten">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {
                        products.slice(4, 8).map(product => <ProductCard key={product.articleNumber} product={product} />)
                        }
                    </div>
                </div>
                <div className="square">
                    <div className="square-text">
                        <h2>2 FOR USD $29</h2>
                        <button className="btn-white">FLASH SALE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FlashSaleSection