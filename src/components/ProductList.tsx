import React, { useContext, useEffect } from 'react'
import  {AddProductContext, IProdoctContext } from '../contexts/AddProductContext'
import ProductListItem from './ProductListItem'

const ProductList = () => {
    const {products, getAll } = React.useContext(AddProductContext) as IProdoctContext

    useEffect(() => {
        getAll()
    }, [products])

  return (
    <>
    <h3 className='container text-center display-6 mb-4'>List of Users</h3>
        {
            products.map((product) => (<ProductListItem key={product.articleNumber} product={product}/>))
        }
    </>
  )
}

export default ProductList