import React from 'react'
import Typed from "react-typed"
import "./css/Homepage.css"
export default function Homepage(props) {
  return (
    <>

      <div className='home-outer-container' id="cont3">
        <div className='home-inner-container' id="cont1">
          <div className='content-main'>
            <h3 style={{color:props.switch_modes==="dark"?"":"#484747"}}></h3>
            <h3 style={{color:props.switch_modes==="dark"?"":"#484747"}}><b>Hello, it's Me</b></h3>
            <h1 style={{color:props.switch_modes==="dark"?"":"#484747"}}><b>Yaggesh Sawant</b></h1>
            <h3 id="my-skill-list" style={{color:props.switch_modes==="dark"?"":"#484747"}}><b>And I'm a <span id="types"><Typed strings={["Android Developer", "Web Developer"]} typeSpeed={80} backSpeed={80} loop /></span></b></h3>
            <p style={{color:props.switch_modes==="dark"?"":"#484747"}}>This is my Portfolio. In this portfolio I includes my all skills and projects.
            </p>
          </div>


          <div className='logos'>
            <a target="_blank" href="https://twitter.com/SawantYaggesh" style={{ "--i": 6 ,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-twitter'></i></a>
            <a target="_blank" href="https://github.com/yaggeshsawant" style={{ "--i": 7,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-github'></i></a>
            <a target="_blank" href="https://www.instagram.com" style={{ "--i": 8 ,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-instagram-alt' ></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/yaggesh-sawant-b88794257" style={{ "--i": 9,"--modeback":props.switch_modes==="dark"?"":"#484747",border: props.switch_modes==="dark"?"2px solid #07e4f4":"2px solid #484747"}}><i className='bx bxl-linkedin'></i></a>

          </div>
          <div className="home-button">
            <a href='yaggesh-sawant-resume.pdf' className='btn' download={"yaggesh-sawant-resume.pdf"} style={{"--shadow":props.switch_modes==="dark"?"#0ef":"#484747",backgroundColor:props.switch_modes==="dark"?"":"#484747",color:props.switch_modes==="dark"?"":"#0ef"}} id="button1"><b>Download CV</b></a>
          </div>
        </div>


        <div className='home-image' >
          <img src="all_images\yaggesh.png" width={340} height={450} />
        </div>
      </div>




    </>

  )
}
