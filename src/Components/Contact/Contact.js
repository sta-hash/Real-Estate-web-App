import React from 'react'
import "./Contact.css";
import {MdCall} from "react-icons/md"
import {HiChatBubbleBottomCenter} from 'react-icons/hi'
import {BsFillChatDotsFill} from 'react-icons/bs'
export default function Contact() {
  return (
   <section
        className ="c-wrapper">
            <div className="paddings innerwidth flexCenter c-container">
                {/* left side*/}
                <div className=" flexColStart c-left">
                    <span className="orangeText"> our contact</span>
                    <span className="primaryText">easy to contact us</span>
                    <span className="secondaryText">exercitation in fugiat est </span>
                    <div className="flexColstart contactModes ">
                        {/*first row*/}
                        <div className="flexColstart row">
                            <div className="flexStart row">
                                <div className="colCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div clasName="flexColStart detail">
                                        <span className="primaryText">call</span>
                                        <span className="secondaryText">999999999</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">call now</div>
                            </div>
                           
                           
                            
                            <div className="ColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill  size={25}/>
                                    </div>
                                    <div clasName="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">999999999</span>
                                    </div>
                                </div>
                                <div className="flexCenter button"> Chat now</div>
                            </div>
                        </div>
                            {/*second row*/}
                            <div className ="flexStart row">
                            <div className="ColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill  size={25}/>
                                    </div>
                                    <div clasName="flexColStart detail">
                                        <span className="primaryText">video call</span>
                                        <span className="secondaryText">999999999</span>
                                    </div>
                                </div>
                                <div className="flexCenter button"> Video Call now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill  size={25}/>
                                    </div>
                                    <div clasName="flexColStart detail">
                                        <span className="primaryText">message</span>
                                        <span className="secondaryText">999999999</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">message now</div>
                            </div>
                        </div>  
                    </div>
                </div>
                {/*right side*/}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./main4.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}
