import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import notFoundImg from '../assets/images/NotFound.jpg'

const NotFoundView = () => {
  document.title = 'Not Found | Fixxo.'
  
  return (
    <>
      <MainMenuSection />
      <div className='not-found container' >
        <img src={notFoundImg} alt='404 not found'/>
      </div>
      <div style={{ position: "fixed", bottom: "0", width:"100%" }}>
        <FooterSection />
      </div>

    </>
  )
}

export default NotFoundView