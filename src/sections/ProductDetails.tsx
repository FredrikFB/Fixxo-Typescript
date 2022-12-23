import React from 'react'
import { Product} from '../models/Product'

interface IProps {
   product: Product 
}

const ProductDetails: React.FC<IProps> = ({product}) => {
  return (
    <section className="product-details">
        <div className="container">
            <div>
                <div>{product.name}</div>
                <img src={product.imageName} alt=""/>
            </div>
        </div>
    
    </section>
  )
}

export default ProductDetails