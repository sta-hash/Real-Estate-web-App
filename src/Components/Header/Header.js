import React, {useState} from 'react'
import './Header.css'
import {BiMenuAltRight} from "react-icons/bi";
import OutSideClickHandler from "react-outside-click-handler"
import OutsideClickHandler from 'react-outside-click-handler';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const[menuOpened, setMenuOpened]=useState(false);
    const getMenuStyles=(menuOpened)=>{
        if(document.documentElement.clientWidth<=800){
            return {right: !menuOpened  && "-100%"};
        }
    }
  return (
    
      <section className = "h-wrapper">
        <div className = "flexCenter paddings innerwidth  h-container">
            <img src = "logo.png" alt= "logo" width = {100}/>
            <OutsideClickHandler
            onOutsideClick={()=>{
                setMenuOpened(false)
            }}
            ></OutsideClickHandler>
            <div className = "flexCenter h-menu" Style={getMenuStyles(menuOpened)}>
            <a href = "">Residencies</a>
              <a href="">Our value</a>
              <a href ="">Contact us</a> 
              <a href ="">Get started</a>
              <button> contact us</button> 
            </div>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
        </div>
       </div>
       
      </section>
    
  )
}
