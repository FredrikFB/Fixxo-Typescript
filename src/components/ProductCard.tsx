import React from 'react'
import { NavLink } from 'react-router-dom'
import {  Product} from '../models/Product'



const ProductCard: React.FC<{product: Product}> = ({product}) => {

    // const addToWishList = (e) => {
    //     console.log(`added to wish list`)
    // }
    // const addToCompare = (e) => {
    //     console.log("added to compare")
    // }
    // const addToCart = (e) => {
    //     console.log("added to shopping cart")
    // }


    // onClick={addToCart} onClick={addToCompare} onClick={addToWishList}

  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <img src={product.imageName} alt={product.name}/>
                <div className="card-menu d-xl-none">
                    <button className="menu-link" ><i className="fa-regular fa-heart"></i></button>
                    <button className="menu-link" ><i className="fa-regular fa-code-compare fa-flip-horizontal"></i></button>
                    <button className="menu-link" ><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to={`/products/${product.articleNumber}`} className="btn-card-theme btn-theme d-xl-none">
                    QUICK VIEW
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{product.category}</p>
                <h5 className="card-title">{product.name}</h5>
                <div className="card-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <span className="old-price">{product.oldPrice}</span>
                <span className="new-price">${product.price}</span>
            </div>
            <div className="card-background"></div>
        </div>
    </div>
  )
}

export default ProductCard