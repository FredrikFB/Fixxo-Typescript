import React from 'react'
import LeftImg from '../assets/images/placeholders/showcase-img-1.svg'
import RightImg from '../assets/images/placeholders/showcase-img-2.svg'

const ShowcaseSection = () => {
  return (
    <section>
        <div className="showcase">
            <div className="container-fluid">
                <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png' className="img-left" alt="" />
                <div className="showcase-body">
                    <h1 >SALE UP</h1>
                    <h1>To 50% Off</h1>
                    <p>Online shopping free home delivery over $100</p>
                    <a href="#" className="btn-theme">SHOP NOW</a>
                </div>
                <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png' className="img-right" alt="" />
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection