import React from 'react'
import { AddProductContext, IProdoctContext } from '../contexts/AddProductContext'
import { Product } from '../models/Product'
import { currencyFormatter } from '../utilities/currencyFormatter'

interface ProductType {
    product: Product
}

const ProductListItem: React.FC<ProductType> = ({product}) => {
    const { remove } = React.useContext(AddProductContext) as IProdoctContext

  return (
    <div className="productlist container">
        <div className="productlist-item">
            <div className="product-image">
                <img src={product.imageName} alt={product.name} />
            </div>
            <div className="product-info">
                <div>ID: {product.articleNumber}</div>
                <div>Name: {product.name}</div>
                <div>Category: {product.category}</div>
                <div>Price: {currencyFormatter(product.price)}</div>
            </div>
            <div className='button'>
                <button onClick={() => remove(product.articleNumber)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
        <div className="item-price">
        </div>
    </div>
    
  )
}

export default ProductListItem