import React from 'react'
import { Link } from 'react-router-dom'


const ShowcaseSection: React.FC = () => {
  return (
    <section>
        <div className="showcase">
            <div className="container-fluid">
                <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-1.png' className="img-left" alt="" />
                <div className="showcase-body">
                    <h1 >SALE UP</h1>
                    <h1>To 50% Off</h1>
                    <p>Online shopping free home delivery over $100</p>
                    <Link to="/products" className="btn-theme">SHOP NOW</Link>
                </div>
                <img src='https://win22imgstorage.blob.core.windows.net/images/showcase-img-2.png' className="img-right" alt="" />
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection