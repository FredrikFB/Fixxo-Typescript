import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { useParams } from 'react-router-dom'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'
import { IProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView = () => {

    const {id} = useParams()
    const {product, get} = useProductContext() as IProductContextType

    useEffect(() => {
      get(id)
    }, [])
  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Quick View"/>
      <ProductDetails product={product}/>
      <FooterSection />
    </>
  )
}

export default ProductDetailsView