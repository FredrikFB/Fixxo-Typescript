import React from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const CreateView = () => {
  return (
    <>
        <MainMenuSection />
        <BreadcrumbSection currentPage='Create'/>
        <ProductForm />
        <ProductList />
        <FooterSection />
    </>
  )
}

export default CreateView