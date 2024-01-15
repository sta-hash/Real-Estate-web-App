import React from 'react'
import './Extra.css'
// import {HiLocationMarker} from 'react-icon/hi';
import CountUp from "react-countup";
import {motion} from "framer-motion";
export default function Extra() {
  return (
    <section className = "extra-wrapper">
        
        <div className="padding innerwidth flexCenter extra-container">
        <div className = ".flexColStart extra-left">
            
            <div className = "extra-title">
                <div className ="blueCircle"></div>
                <motion.h1 
                intial={{x:"4rem",opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{
                    duration:4,
                    type:"ease-in",
                }}
                >
                Discover<br/> Most Perfect<br/> Property</motion.h1>
            </div>
       
         <div
            className = "flexColStart extra-des">
            <span  className="secondaryText"> find Beautiful properties that suits you the best </span>
            <span   className="secondaryText"> you will not face any difficulties in finding the best residence for you</span>
            </div>
            <div className = "flex Center search-bar">
                {/* <HiLocationMarker color="blue" size={25}>
                    <input type="text"/>
                    <button className ="button">Search</button>
                </HiLocationMarker> */}
            </div>
            <div className="flexCenter stats">
                <div className = "flexColCenter stat">
                    <span>
                      <CountUp start ={8000} end ={9000}/>  
                      <span>+</span> 
                    </span>
                    <span
                       className="secondaryText"> premium properties
                    </span>
                </div>
                <div
                    className= "flexColCenter stat">
                        <span>
                            <CountUp start = {50} end ={90} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className="secondaryText">Happy Customers
                        </span>
                </div>
                <div className ="flexColCenter stat">
                    <span>
                        <CountUp  start={10}end ={25} duration={4}/>
                        <span>+</span>
                        
                    </span>
                    <span className="secondaryText"> Award Winning</span>
                </div>
            </div>

        </div>
        <div className = "flexCenter extra-right">
            <motion.div
             intial={{x:"7rem",opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{
                 duration:4,
                 type:"ease-in",
             }}
             className= "image-container">
                <img src = "./main png.png" alt ="main png"/>
            </motion.div>
        </div>
        </div>

    </section>
  )
}
