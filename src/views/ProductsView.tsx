import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import { IProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductsView: React.FC = () => {
  document.title = 'Products | Fixxo.'

  const { products, getProducts} = useProductContext() as IProductContextType

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products"  products={products}/>
      <FooterSection />
    </>
  )
}

export default ProductsView