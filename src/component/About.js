import React from 'react'
import "./css/About.css"
import { useState, useEffect } from 'react'
export default function About(props) {
  const [about_popup,set_about_popup]=useState(false)
  const [scroll, set_scroll] = useState(false)

  useEffect(() => {
    document.querySelector(".About-container").style.filter =about_popup? "blur(15px)" : "";

}, [about_popup]);

 
  return (
    <>
    <div className="about-outer-container">
    <div className='About-container' id="about-back" >

      <div className="about-image-container">
        <img id="about-image" src="/all_images/yaggesh.png"/>
        </div>
      
      <div className="About-content">

        <h4 style={{color:props.switch_modes==="dark"?"":"#484747"}}>About<span> Me</span></h4>
        <h3 style={{color:props.switch_modes==="dark"?"":"#484747"}}>I am a Software Engineer</h3>
        <div className='about-para'>
          <p className="para" style={{color:props.switch_modes==="dark"?"":"#484747"}}>
I am yaggesh sawant, a versatile developer proficient in web and Android app development. 
Specializing in crafting responsive websites and user-friendly Android applications, I merge innovation with functionality.
</p>
        </div>
        
        <button onClick={()=>set_about_popup(about_popup? false : true)} className='btn' style={{display:"flex","--shadow":props.switch_modes==="dark"?"#0ef":"#484747",backgroundColor:props.switch_modes==="dark"?"":"#484747",color:props.switch_modes==="dark"?"":"#0ef"}}><b> Read more</b></button>
      
      </div>

      
    </div>

    <div className={`popup_about ${about_popup?"popup_about_active":""}`}  style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
      <i onClick={()=>set_about_popup(about_popup? false : true)} className="fa-solid fa-circle-xmark"></i>
      <h3>About <span>Me!</span></h3>
      <div className='popup_about_content'>
      <p className="para">As a versatile developer, I specialize in crafting captivating websites and user-centric mobile applications. 
      In web development, I leverage cutting-edge technologies to create dynamic sites with seamless interfaces and optimal performance.
       Proficient in frontend and backend, I prioritize user experience, delivering engaging websites aligned with modern design trends.
        In Android development, I excel in designing scalable apps with intuitive interfaces and innovative features.
         My focus on clean code ensures visually appealing, maintainable, and high-performing applications throughout the development lifecycle.<br/> <br/>

         In web development, I delve into responsive design principles, ensuring adaptability across various devices while implementing robust backend solutions for enhanced functionality.
          For Android apps, I focus on integrating emerging technologies, optimizing for performance, and conducting rigorous testing to guarantee a seamless user experience.
           My commitment to innovation drives the creation of engaging, cutting-edge digital solutions.
         </p>
      </div>
    </div>
    </div>
    
    </>
  )
}
