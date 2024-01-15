import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <section className ="f-wrapper">
        <div className="paddings innerwidth flexCenter f-container">
            {/*left side*/}
            <div className="flexColStart f-left">
                <img src="./logo.png" alt="" width={120}/>
                <span className="secondaryText">
                    our vision is to you by proving you the best property  

                </span>
            </div>
            {/*right side*/}
            <div className="flexColStart f-right">
                <span className="primaryText">Information </span>
                <span className="secondaryText">Bangalore ,karnataka</span>
                <div className ="flexCenter f-menu">
                    <span>property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>AboutUs</span>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
