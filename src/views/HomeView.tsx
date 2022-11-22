import React, {useEffect} from 'react' 
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import ProductGridSection from '../sections/ProductGridSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import WebInfoSection from '../sections/WebInfoSection'
import FooterSection from '../sections/FooterSection'
import { useProductContext } from '../contexts/ProductContext'




const HomeView = () => {
  document.title = 'Fixxo.'
  const {featured, getFeatured} = useProductContext()
  const {products, getProducts} = useProductContext()
  
  useEffect(() => {
    getFeatured(8)
    getProducts()
  }, [])

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" products={featured}/> 
      <TopPicksSection />
      <FlashSaleSection products={products} />
      <WebInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView