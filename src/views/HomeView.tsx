import React, {useEffect} from 'react' 
import MainMenuSection from '../sections/MainMenuSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import ProductGridSection from '../sections/ProductGridSection'
import FlashSaleSection from '../sections/FlashSaleSection'
import WebInfoSection from '../sections/WebInfoSection'
import FooterSection from '../sections/FooterSection'
import { IProductContextType, useProductContext } from '../contexts/ProductContext'




const HomeView: React.FC = () => {
  document.title = 'Fixxo.'
  const {featured, getFeatured, getFlashSale, flashSale} = useProductContext() as IProductContextType
  
  useEffect(() => {
    getFeatured(8)
    getFlashSale(8)
  }, [featured, flashSale])

  return (
    <>
      <MainMenuSection />
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" products={featured}/> 
      <TopPicksSection />
      <FlashSaleSection products={flashSale} />
      <WebInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView