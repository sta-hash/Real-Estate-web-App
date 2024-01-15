import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../Utils/slider.json";
import {sliderSettings} from "../../Utils/Common";

export default function Residencies() {
  return (
   <section className="r-wrapper">
    <div className ="paddings innerwidth r-container">
        <div className ="r-head flexColStart">
            <span className="orangeText"> Best choices</span>
            <span className="primaryText">popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
                <SliderButtons/>
                {data.map((card,i)=>(
                <SwiperSlide key ={i}>
                    <div className ="flexColstart r-card">
                        <img src ={card.image} alt="Home"/>
                        <span className = "secondaryText r-price">
                            <span style={{color:"orange"}}>$</span>
                            <span>{" "+  card.price}</span>
                        </span>
                        <span className="primaryText">{card.name}</span>
                        <span className="secondaryText">{card.detail}</span>
                    </div>
                </SwiperSlide>
                ))
                }
            
        </Swiper>
    </div>
   </section>

  )
}
const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
        <div className ="flexCenter r-button">
            <button onClick={()=>swiper.slidePerv()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}