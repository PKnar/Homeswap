import React, { useEffect } from "react";
import home1 from "../assests/svg/home1.svg";
import home2 from "../assests/svg/home2.svg";
import home3 from "../assests/svg/home3.svg";
import "../css/Homepage.css";

function HowSection() {
  window.addEventListener(
    "scroll",
    (event) => {
      let scrollTop = document.documentElement.scrollTop;
      let cardOne = document.querySelector(".card-one");
      let cardTwo = document.querySelector(".card-two");
      let cardThree = document.querySelector(".card-three");
      if (cardOne && cardTwo && cardThree) {
        if (scrollTop > 250) {
          cardOne.style.animation = "slideRight 2s forwards";
          cardTwo.style.animation = "slideUp 2s forwards";
          cardThree.style.animation = "slideLeft 2s forwards";
        } else if (scrollTop < 200) {
          cardOne.style.animation = "";
          cardTwo.style.animation = "";
          cardThree.style.animation = "";
        }
      }
    },
    []
  );

  return (
    <section id="how-does-it-work">
      <div className="divider"></div>
      <h2>How does it work?</h2>
      <p className="additional-info">
        This site is intended for tenants who offer their rental property for
        exchange. <br /> You can use it for free. For example because of work,
        family expansion or for other reasons.
      </p>

      <div className="container">
        <div className="card card-one">
          <img src={home1} />
          <h3 style={{ margin: " 1rem  0" }}>Sign up & Fill in the form</h3>
          <p> Fill in the required fields and upload pictures.</p>
        </div>
        <div className="card card-two">
          <img src={home2} />
          <h3 style={{ margin: " 1rem  0" }}>Share where you want to move</h3>
          <p>
            To prevent too many exchange request from the same user a maximum of
            3 ads per user is allowed. By specifying 3 advertisements with
            different places of residence and a large radius, an area of
            ​​almost half of the whole of the Netherlands can be covered!
          </p>
        </div>
        <div className="card card card-three">
          <img src={home3} />
          <h3 style={{ margin: " 1rem  0" }}>Exchange</h3>
          <p>
            Exchange candidates and home seekers from all over the country meet
            on this site. The search system brings the candidates to the
            property that meets their needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowSection;
