import React, { useEffect } from "react";
import home1 from "../assests/svg/home1.svg";
import home2 from "../assests/svg/home2.svg";
import home3 from "../assests/svg/home3.svg";
import "../css/Homepage.css";

import bg_image from "../assests/images/image.jpg";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>How does it work?</h2>
        <p className="additional-info">
          This site is intended for tenants who offer their rental property for
          exchange. You can use it for free. For example because of work, family
          expansion or for other reasons.
        </p>
      </div>

      <div
        className="container"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="card card-one">
          <h3 style={{ margin: " 1rem  0" }}>Sign up & Fill in the form</h3>
          <p>
            The system guarantees your privacy. By completing and submitting the
            registration form, your rental property will be included in the
            database free of charge and without obligations. After completing
            your form, you will be given the option to add a photo to your
            advertisement.
          </p>
        </div>
        <div className="card card-two">
          <h3 style={{ margin: " 1rem  0" }}>Share where you want to move</h3>
          <p>
            To prevent too many exchange request from the same user a maximum of
            3 ads per user is allowed. By specifying 3 advertisements with
            different places of residence and a large radius, an area of
            ​​almost half of the whole of the Netherlands can be covered!
          </p>
        </div>
        <div className="card card card-three">
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
