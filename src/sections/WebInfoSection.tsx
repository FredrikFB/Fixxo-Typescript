import React from 'react'
import iconSupport from '../assets/images/icons/customerSupport.svg'
import iconTruck from '../assets/images/icons/delivery.svg'
import iconPayment from '../assets/images/icons/securedPayment.svg'
import InfoIcons from '../components/InfoIcons'

//{img, title, paragraph}
const WebInfoSection = () => {
  return (
    <section>
        <div className="hr container">
            <hr/>
        </div>
        <div className="web-info">
            <div className="container row row-cols-1 row-cols-xl-4 g-4">
              <InfoIcons img={iconSupport} title="Customer Support" paragraph="Village did removed enjoyed explain talking."/>
              <InfoIcons img={iconPayment} title="Secured Payment" paragraph="Village did removed enjoyed explain talking."/>
              <InfoIcons img={iconTruck} title="Free Home Delivery" paragraph="Village did removed enjoyed explain talking."/>
              <InfoIcons img={iconTruck} title="30 Day Reuters" paragraph="Village did removed enjoyed explain talking."/>
            </div>
        </div>
    </section>
  )
}

export default WebInfoSection