import React from "react";
import home1 from "../assests/svg/home.svg";
import home2 from "../assests/svg/home1.svg";
import home3 from "../assests/svg/home2.svg";
import "../css/Homepage.css";

function HowSection() {
  window.addEventListener("scroll", (event) => {
    let scrollTop = document.documentElement.scrollTop;
    let cardOne = document.querySelector(".card-one");
    let cardTwo = document.querySelector(".card-two");
    let cardThree = document.querySelector(".card-three");

    if(scrollTop > 250){
      cardOne.style.animation = "slideRight 1s forwards"
           cardTwo = 
           cardThree = 


    }
  });

  return (
    <section id="how-does-it-work">
      <h2>How does it work?</h2>

      <div className="container">
        <div className="card card-one">
          <p>Post your home</p>
          <img src={home1} />
        </div>
        <div className="card card-two">
          <p>Share where you want to move</p>
          <img src={home2} />
        </div>
        <div className="card card card-three">
          <p> Match the requests and exchange the places </p>
          <img src={home3} />
        </div>
      </div>
    </section>
  );
}

export default HowSection;
