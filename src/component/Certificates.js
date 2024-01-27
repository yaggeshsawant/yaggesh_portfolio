import React from 'react'
import "./css/Certificate.css"
import { useState, useEffect } from 'react'
export default function Certificate(props) {
    const [popup, set_popup] = useState(false)
    const [popup1, set_popup1] = useState(false)
    const [popup2, set_popup2] = useState(false)
    const [popup3, set_popup3] = useState(false)
    const [popup4, set_popup4] = useState(false)
    const [popup5, set_popup5] = useState(false)
    const [popup6, set_popup6] = useState(false)
    const [popup7, set_popup7] = useState(false)
    const [rote, set_rote] = useState(false)
    const [zoom, set_zoom] = useState("")
    useEffect(() => {
        document.querySelector(".certificate-middle-container").style.filter = popup || popup1 || popup2 || popup3 || popup4 || popup5 || popup6 || popup7 ? "blur(15px)" : "";

    }, [popup, popup1, popup2, popup3, popup4, popup5, popup6, popup7]);

    return (
        <>
            <div className="certificate-outer-most">
                <h3 id="certificate_heading" style={{color:props.switch_modes==="dark"?"":"#484747"}}>My <span id="span2">Certificates</span></h3>
                <div className='certificate-middle-container'>
{/* 
                    <div  className="prev-certificate">
                    <span style={{color:props.switch_modes==="dark"?"":"#484747"}} onClick={() => set_rote(false)} >&#60;</span>
                    </div> */}

                    <div className="certificate-outer-container">

                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 2 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 2 }} id="certificate-1">
                                    <img src="/all_images/javaCertificate.jpg" />
                                    <div className='certificate-layer'>
                                        <h3>Core <span>Java </span></h3><br></br>
                                        <i onClick={() => set_popup(popup ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="back-face">
                                <div className="certificate-inner-container" style={{ "--m": 2 }} id="certificate-1">
                                    <img src="/all_images/sciencequiz.jpg" />
                                    <div className='certificate-layer'>
                                        <h3>Science Quiz <span>Winner </span></h3>
                                        <i onClick={() => set_popup6(popup6 ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div> */}

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 4 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 4 }} id="certificate-2">
                                    <img src="/all_images/web.png" />
                                    <div className='certificate-layer'>
                                        <h3>Web <span> Developement </span></h3><br></br>
                                        <i onClick={() => set_popup1(popup1 ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div>
{/* 
                            <div className="back-face">
                                <div className="certificate-inner-container" style={{ "--m": 2 }} id="certificate-1">
                                    <img src="/all_images/problem_solving.png" />
                                    <div className='certificate-layer'>
                                        <h3>Hackerrank <span>Problem Solving </span></h3>
                                        <i onClick={() => set_popup7(popup7 ? false : true)} className='bx bx-link-external'></i>
                                    </div>
                                </div>
                            </div> */}

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 6 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 6 }} id="certificate-3">
                                    <img src="/all_images/androidcert.jpg" />
                                    <div className='certificate-layer'>
                                        <h3>Android <span>Developement</span></h3><br></br>
                                        <i onClick={() => set_popup2(popup2 ? false : true)} className='bx bx-link-external'></i>

                                    </div>
                                </div>
                            </div>

                            <div className="back-face"></div>

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 8 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 8 }} id="certificate-4">
                                    <img src="/all_images/webdesing.jpg" />
                                    <div className='certificate-layer'>
                                        <h3>Web  <span>Design</span></h3>
                                        <i onClick={() => set_popup3(popup3 ? false : true)} className='bx bx-link-external'></i>

                                    </div>
                                </div>
                            </div>

                            <div className="back-face"></div>

                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 10 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 10 }} id="certificate-5">
                                    <img src="/all_images/firstyear.jpg" />
                                    <div className='certificate-layer'>
                                        <h3>Merit <span>Certification</span></h3>
                                        <i onClick={() => { set_popup4(popup4 ? false : true) }} className='bx bx-link-external'></i>

                                    </div>
                                </div>
                            </div>



                        </div>


                        <div className={`rote ${rote ? "rote-animate" : ""}`} style={{ "--q": 12 }}>

                            <div className="front-face">
                                <div className="certificate-inner-container" style={{ "--m": 12 }} id="certificate-6">
                                    <img src="/all_images/mathsquiz.jpg" />
                                    <div className='certificate-layer'>
                                        <h3>mathematics Quiz <span>Winner</span></h3>
                                        <i onClick={() => set_popup5(popup5 ? false : true)} className='bx bx-link-external'></i>
                                    </div>

                                </div>
                            </div>

                            <div className="back-face"></div>

                        </div>


                    </div>
                    {/* <div className="next-certificate">

                        <span style={{color:props.switch_modes==="dark"?"":"#484747"}} onClick={() => set_rote(true)} >&#62;</span>
                    </div> */}

                </div>




            <div className={`popup-image ${(popup ? "active_certificate" : "")}`} style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}} id="popup-image1">
                <div id="span1" onClick={() => {
                    set_popup(popup ? false : true)
                    set_zoom("zoom")
                }}><i className="fa fa-solid fa-circle-xmark"></i></div>
                <img src="/all_images/javaCertificate.jpg"  />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>In this certification i have lerned about the basic concepts of java programming.<br/> <br />
                        By completing this certificate I get confidence to build projects in java programming language.<br/> <br />
                        Additionally, In internship of core java I worked on various live projects which enhanced my core java knowledge.<br/> <br />
                        This core java internship I done from the Madss software solutions Pvt.LTd, kandwa.</p>
                   
                </div>
            </div>

            <div className={`popup-image ${(popup1 ? "active_certificate" : "")}`} id="popup-image2" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup1(popup1 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/web.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>This is my web developement internship certification which I done from Technohacks, Nagpur. In this internship I enhaced my web development skills.<br/> <br/>
                        As Enthusiastic web development intern with hands-on experience in HTML, CSS, JavaScript, and frameworks.<br/><br/>
                         Developed responsive, user-centric websites and gained proficiency in UI/UX design. Collaborative team player, passionate about learning and implementing innovative solutions. <br/><br/>
                         Seeking to leverage skills and contribute effectively in dynamic work environments.
                          </p>
                          <p><span>Skills</span>:Html, css, javascript, React, java </p>
              
                </div>
            </div>

            <div className={`popup-image ${(popup2 ? "active_certificate" : "")}`} id="popup-image3" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup2(popup2 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/androidcert.jpg" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>This is my Android developement internship certification which I done from Texcode solution Pvt.LTd, Pune. In this internship I enhaced my Android development skills.<br/> <br/>
                    Dedicated Android Development intern proficient in Java, Android SDK, and app development lifecycle. <br/><br/>
                     Created intuitive, high-quality mobile applications, focusing on user experience and performance optimization.<br/><br/>
                      Collaborated effectively in agile teams, demonstrating a passion for innovation and continuous learning in the dynamic realm of Android development. </p>
                    <p><span>Skills</span>: Andriod studio, java, XML, Rest API <br/>
                    Firebase database, Sqlite database</p>
                </div>
            </div>

            <div className={`popup-image ${(popup3 ? "active_certificate" : "")}`} id="popup-image4" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup3(popup3 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/webdesing.jpg" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p> This certification is for web designing workshop which marks a pivotal role in enahncing my skills to craft dynamic and visually captivating websites.
 Over the course, I delved into various facets, including HTML, CSS, JavaScript, and UI/UX principles.
  Through hands-on exercises and mentorship, I have mastered in responsive design, accessibility, and best practices in layout and navigation. 
  Collaborative projects and constructive feedback fostered a creative environment, enabling me to translate concepts into polished web solutions.
   As the workshop wraps up, I depart equipped with the expertise to create impactful, user-centric designs, ready to embark on professional endeavors in the ever-evolving realm of web development.</p>
                </div>
            </div>

            <div className={`popup-image ${(popup4 ? "active_certificate" : "")}`} id="popup-image5" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup4(popup4 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/firstyear.jpg" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>Earning the prestigious first rank in the inaugural year of my B.Tech in Computer Science and Engineering is a testament to dedication and academic excellence. 
                        This merit certification showcases my commitment to mastering core principles in programming, algorithms, and computer systems. 
                        Achieving the top position among peers signifies not just academic prowess but also a strong work ethic and a passion for innovation. 
                        It highlights my ability to grasp complex concepts and apply them effectively. 
                        This accomplishment in the first year sets the foundation for continued success, reflecting my drive to excel in the field of technology and contribute meaningfully to the industry.</p>
                </div>
            </div>

            <div className={`popup-image ${(popup5 ? "active_certificate" : "")}`} id="popup-image6" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup5(popup5 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/mathsquiz.jpg" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p> Receiving the National Mathematics Day Quiz Winner certificate is a testament to my proficiency and enthusiasm in the realm of mathematics. 
                        This accolade represents not just an achievement but a celebration of my dedication to problem-solving, logical reasoning, and analytical thinking.
                         Emerging victorious in a nationwide competition underscores my ability to navigate diverse mathematical concepts and apply them effectively in competitive settings.<br/><br/> 
                         The certificate symbolizes a commitment to continuous learning and a passion for the intricacies of mathematics. 
                         It showcases my aptitude for tackling challenges and showcases my skill in quick thinking and accurate problem-solving under pressure. 
                         This honor is a proud addition to my portfolio, demonstrating my expertise in mathematics and the capacity to excel in demanding intellectual pursuits.</p>
                    
                </div>
            </div>

            {/* <div className={`popup-image ${(popup6 ? "active_certificate" : "")}`} id="popup-image7" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup6(popup6 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/sciencequiz.jpg" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>The National Science Day Quiz Winner certificate signifies a remarkable accomplishment that resonates deeply with my passion for scientific inquiry and knowledge. 
                        Securing victory in a nationwide competition reflects my adeptness in comprehending intricate scientific concepts across diverse disciplines.
                         This achievement highlights not only my proficiency in scientific theories but also my adeptness in critical thinking, problem-solving, and analytical reasoning.<br/><br/>
                          It showcases my ability to synthesize information rapidly and effectively, a skill crucial in scientific exploration and discovery. The certificate stands as a testament to my dedication to scientific exploration and innovation.
                           It underscores my commitment to advancing knowledge and contributing meaningfully to the field of science. This recognition in the National Science Day Quiz is a proud addition to my portfolio, representing my excellence and enthusiasm in the realm of scientific inquiry.
</p>
                </div>
            </div> */}

            {/* <div className={`popup-image ${(popup7 ? "active_certificate" : "")}`} id="popup-image8" style={{backgroundColor:props.switch_modes==="dark"?"":"#484747"}}>
                <span id="span1" onClick={() => set_popup7(popup7 ? false : true)}><i className="fa-solid fa-circle-xmark"></i></span>
                <img src="/all_images/problem_solving.png" />
                <div className="mylearning">
                    <h3 >My <span>learning</span></h3>
                    <p>In this certification i have lerned how to work on hardware like nvdia<br />
                        jetson nano kit. to complete this certificate we build an project attendence system<br />
                        using face Recognition and deployed on jetson nono kit. in this i have learned many<br />
                        concepts of machine learning and deep-learning</p>
                    <p><span>Skills</span>: Machine Learning, Deep learning,Python</p>
                </div>
            </div> */}
            </div>
        </>


    )

}