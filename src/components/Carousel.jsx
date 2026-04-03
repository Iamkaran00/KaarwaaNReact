import { useEffect, useRef, useState } from "react";
import "./carousel.css";

 

import sktiwarisir from '../asset/sktiwarisir.jpg';

import anubhamahe from '../asset/anubhamaheshwarimam.jpg';

import savitrimam from '../asset/savitrimam.jpg';

import prashantjainsir from '../asset/prashantjainsir.jpg';

import samajhsir from '../asset/samajhsinghthakursir.jpg';

import jyotimam from '../asset/jyotimam.jpg';

import ranjanmam from '../asset/ranjanamam.jpeg';


const cards = [

  {

    id: 1,

    name: "Dr. samajh singh thakur sir",

    role: "Former Principal JEC",

    img: samajhsir,

  },

  {

    id: 2,

    name: "Prof. Jyoti Chobey Ma'am",

    role: "Physics Dept. Head of Student Welfare JEC",

    img: jyotimam,

  },

  {

    id: 3,

    name: "Mrs. Savitri Patel Ma'am",

    role: "Former admin. officer JEC head of Kaarwaa.N...",

    img: savitrimam,

  },

  {

    id: 4,

    name: "Dr. Ranjana Singh Mam",

    role: "Pro. EE Dept. JEC",

    img: ranjanmam,

  },

  {

    id: 5,

    name: "Dr. S.K. Tiwari Sir",

    role: "HOD, Physics Dept. JEC",

    img: sktiwarisir,

  },

  {

    id : 6 ,

    name : "Dr. Prashant Jain",

    role : "Former HOD, IT & EC Dept.",

    img : prashantjainsir,

  },

  {id : 7 ,

    name : "Dr. Anubha Maheshwari Ma'am",

    role : "Chemistry Dept.",

    img : anubhamahe

  }

];



export default function ZigZagCarousel() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let animationId;
    let position = 0;

    const animate = () => {
      if (!paused && trackRef.current) {
        position -= 0.8; // Slightly faster for smoother feel on high-refresh monitors
        const width = trackRef.current.scrollWidth / 2;
        if (Math.abs(position) >= width) position = 0;
        trackRef.current.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  return (
    <section className="carousel-section">
  
      
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className={`carousel-card ${index % 2 === 0 ? "offset-up" : "offset-down"}`}
            >
              <div className="card-glass">
                <div className="image-container">
                  <img src={card.img} alt={card.name} loading="lazy" />
                </div>
                <div className="card-content">
                  <h3>{card.name}</h3>
                  <p>{card.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}