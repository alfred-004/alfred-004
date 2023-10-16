import React from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/Hero.png";
import exam from "../assets/exam.png";
import code from "../assets/web-development.png";
import "../styles/Home.css";


const Home = () => {


    return (
        <>
             <div className="hero-section">
                <div className="hero-image">
                <img src={Hero}
                    alt ="Hero"></img>
                </div>
                <div className="hero-slogan">
                    <h2>"Coding Confidence,</h2>
                    <h2>One Line at a time."</h2>
                </div>
             </div>
             <div className="ending-section">
               <div className="ending-logo">
                <img src={exam}
                     alt="timepass-image"
                     height={100}
                     width={100}></img> 
                     </div>
                <div className="ending-slogan">
               <h1>Explore and Learn DSA </h1>
               </div>
               </div>
                <div className="feature">
                    <div className="feature1">
                       <div className="feature-logo">
                        <img src={code}
                             alt="code"
                             height={50}
                             width={50}></img>
                        </div>
                        <div className="feature-content">
                        <h3>Use the AlgoCheck in-browser editor</h3>
                        <p>Don't spend hours installing a language locally just to try it out. We support 3 to 4 of commonly used programming languages in our in-browser editor.</p>
                        </div>
                    </div>   
                    <div className="feature2">
                    <div className="feature-logo">
                        <img src={code}
                             alt="code"
                             height={50}
                             width={50}></img>
                        </div>
                        <div className="feature-content">
                        <h3>Use the AlgoCheck in-browser editor</h3>
                        <p>Don't spend hours installing a language locally just to try it out. We support 3 to 4 of commonly used programming languages in our in-browser editor.</p>
                        </div>
                    </div>   
                    <div className="feature3">
                    <div className="feature-logo">
                        <img src={code}
                             alt="code"
                             height={50}
                             width={50}></img>
                        </div>
                        <div className="feature-content">
                        <h3>Use the AlgoCheck in-browser editor</h3>
                        <p>Don't spend hours installing a language locally just to try it out. We support 3 to 4 of commonly used programming languages in our in-browser editor.</p>
                        </div> 
                    </div>   
                 </div>
                 <div className="get-started">
                    <div className="slogan">
                        <h1>Finding Data Structure Tough ?</h1>
                    </div>
                    <button><Link to="/getstarted">Click Me</Link></button>
                 </div>
        </>
       );
}

export default Home;    