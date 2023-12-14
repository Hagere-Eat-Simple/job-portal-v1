"use client"
import React from "react";
// import "../styles/app.scss";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";


function HomePage() { 
     const {isUserAuth , loading} = useUserRole();
     const router = useRouter();
     let link = "/registration";
     if (!loading) {
        if(isUserAuth){
            if(isUserAuth === "user"){
                link = "/jobs"
            }else{
                link = "/employer/dashboard"
            }
            }
    const handleClick=(data:any)=>{
        router.push(`/jobs?job=${data}`)
    }
            
    return(
           <>
                <section className="Home">
                    <div className="moto">
                        <h1>Connecting Careers, <span className="yellow">Empowering</span> Futures</h1>
                        <h3>We are a professional digital agency that has been established since 2023, we present a variety of digital services that can help you solve problems in your business
                        </h3>
                        <a href={`${link}`}> <button>Get Started <i className='fas fa-arrow-right'></i></button> </a>
                    </div>
                    <div className="circle-container">
                        <img 
                        className="circle-img"
                        src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="collaborative workspace" />
                    </div>
                </section>
                <section className="streams">
                    <div>
                        <h1>
                        Browse jobs ...
                        </h1>
                    </div>
                        <div className="grida" >
                        <div className="grida-item" onClick={()=>handleClick("web")}>
                            <i className="fas fa-code"></i>
                        <h2>Web Developer</h2>
                        <p>Designs and builds websites using programming languages and web technologies.</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-bullhorn"></i>
                        <h2>Marketing Manager</h2>
                        <p>Develops and implements marketing strategies to promote products or services.</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-handshake"></i>
                        <h2>Sales Representative</h2>
                        <p>Sells products or services to clients and maintains customer relationships.</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-brush"></i>
                        <h2>Graphic Designer</h2>
                        <p>Creates visually appealing designs for various mediums, such as print and digital.</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-tasks"></i>
                        <h2>Project Manager</h2>
                        <p>Oversees and coordinates projects, ensuring successful completion within scope and budget.</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-chart-line"></i>
                        <h2>Financial Analyst</h2>
                        <p>Analyzes financial data to provide insights and recommendations for business decisions.
</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-calculator"></i>
                        <h2>Accountant</h2>
                        <p>Manages financial records, prepares financial statements, and provides financial guidance.</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-share-alt"></i>
                        <h2>Social Media Manager</h2>
                        <p> Develops and executes social media strategies to enhance brand presence and engage audiences.</p>
                        </div>
                        <div className="grida-item">
                            <i className="fas fa-headset"></i>
                        <h2>Customer Service</h2>
                        <p>Assists customers with inquiries, provides support, and ensures customer satisfaction.</p>
                        </div>
                    </div>
                </section>
                <section className="AboutUs">
                    <div>
                        <h1 className="hWho">~Who are we?</h1>
                    </div>
                    <div className="grid">
                        <div className="rectangle">
                            <h1>Team</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat non explicabo laudantium a commodi minima dignissimos ipsam assumenda quis accusamus, corporis reiciendis laboriosam magnam, perspiciatis impedit! Quisquam, itaque id!
                            </p>
                            </div>
                        <div className="squares">
                            <div className="square">
                                <h1>Company History</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, corporis laboriosam nam, eos praesentium harum sint nesciunt molestiae explicabo aperiam ducimus ipsum voluptatum nostrum fugit rerum, nisi sed ea dolorum!
                                </p>
                                </div>
                            <div className="square2">
                                <h1>Mission and Values</h1>
                                <p>Lorem ipsum dolo expeditm ipsusto hic minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel ullam nobis et, id dicta quibusdam ipsam! Ipsum, sunt saepe, inventore accusantium reiciendis facere voluptates a delectus excepturi doloribus alias.</p>
                                </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="features">
                            <div className="first">
                                <h1>Why Choose Us?</h1>
                                <p><i className="fas fa-handshake"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus iste repellendus cum totam voluptatibus corporis magnam est, quasi vitae aliquam tempora sunt reprehenderit provident unde ducimus itaque deleniti quisquam.</p>
                                <br/>
                                <p><i className="fas fa-handshake"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis necessitatibus iste repellendus cum totam voluptatibus corporis magnam est, quasi vitae aliquam tempora sunt reprehenderit provident unde ducimus itaque deleniti quisquam.</p>
                                <br/>
                                <p><i className="fas fa-briefcase"></i>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est unde obcaecati laborum, animi incidunt officiis magni delectus officia aut ducimus odio, quibusdam eos ipsa ipsum fuga accusamus, aspernatur impedit ad?</p>
                            </div>
                            <div className="second">
                                <p><i className="fas fa-check-circle"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus adipisci rerum sequi recusandae culpa quibusdam fugiat? Enim, sunt. Explicabo, eaque voluptate quisquam nemo corrupti soluta aliquid laboriosam itaque nam.</p>
                            </div>
                    </div>
                </section>
        </>
    );
}}

export default HomePage;
