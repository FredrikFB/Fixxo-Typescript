import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { useParams } from 'react-router-dom'
import BreadcrumbSection from '../sections/BreadcrumbSection'

const ProductDetailsView = () => {

    const params = useParams()

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Quick View"/>
        <div className="container mt-5">
            <h1>{params.id}</h1>
        </div>
      <FooterSection />
    </>
  )
}

export default ProductDetailsView