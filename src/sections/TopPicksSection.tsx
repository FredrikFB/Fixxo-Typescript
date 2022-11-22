import React from 'react'
import PamelaImg from '../assets/images/placeholders/placeholder-pamela.svg'
import GrayImg from '../assets/images/placeholders/placeholder-gray-dude.svg'

const TopPicksSection = () => {
  return (
    <section>
        <div className="top-picks">
            <div className="container">
                <div className="banner">
                    <img src={PamelaImg} alt="female brown background"/>
                    <div className="banner-text">
                        <h2>Pamela Reaf's</h2>
                        <h2>Top Picks</h2>
                        <button className="btn-dark mt-3">FLASH SALE</button>
                    </div>
                </div>
                <div className="banner2">
                    <img src={GrayImg} alt="female brown background"/>
                    <div className="banner-text">
                        <h2>Let's Be</h2>
                        <h2>Conscious</h2>
                        <button className="btn-white mt-3">SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopPicksSection