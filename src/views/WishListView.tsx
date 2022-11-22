import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'

const WishListView = () => {
  document.title = 'WishList | Fixxo.'
  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default WishListView