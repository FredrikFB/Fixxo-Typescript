import React from 'react'
import { ShoppingCartType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCart: React.FC = () => {
  const {items} =useShoppingCartContext() as ShoppingCartType

  return (

    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-3"></i>Shopping Cart</h4>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#shoppingCart" aria-controls="offcanvasRight" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {
          items.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))
        }
      </div>
    </div>
  )
}

export default ShoppingCart