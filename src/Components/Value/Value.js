import React, {useState} from "react";
import {Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel,AccordionItemState}from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlinearArrowDropDown} from 'react-icons/md';
import './Value.css';
import data from "../../Utils/accordion";
export default function Value() {
    const [className,setClassName] = useState(null);
  return (
   <section className = "v-wrapper">
   <div className = "paddings innerwidth flexCenter v-container">
    {/*left side*/}
    <div className ="v-left">
        <div className ="image-container">
            <img src ="./main2.png" alt=""/>
        </div>
    </div>
    {/*right side*/}
    <div className = "flexCenter v-right">
        <span className ="orangeText"> Our value</span>
        <span className="primaryText"> Value we give to you</span>
        <span className = "secondaryText"> we always help you yo find the right property
        <br/> Best service you can get is from us related to buying the best property that will have great value in future</span>
        <Accordion className = "accordion"
            allowMultipleExpanded={false}preExpanded={[0]}>
                {data.map((item, i)=>{
                        return (
                             <AccordionItem className={'accordionItem ${className}'} key={i}uuid={i}>
                             <AccordionItemHeading>
                                <AccordionItemButton className=" flexCenter accordionButton">
                                    <AccordionItemState>
                                        {({expanded}) => expanded?
                                        setClassName("expanded"):
                                        setClassName("collapsed")}

                                    </AccordionItemState>
                                 <div className="flexCenter icon">{item.icon}</div>
                                 <span className= "primaryText">{item.heading}</span>
                                 {/* <div className ="flexCenter icon">
                                     <MdOutlinearArrowDropDown size ={20}/>
                                      </div> */}
                                </AccordionItemButton>
                             </AccordionItemHeading>
                             <AccordionItemPanel>
                                <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                                
                             </AccordionItem>
                        )
                   })}
                
        </Accordion>
    </div>
   </div>
   </section>
  )
}
