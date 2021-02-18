import React, { useEffect, useState } from "react";
import HomeSVG from "../components/HomeSVG";
import HowSection from "../components/HowSection";
import "../css/Homepage.css";
import axios from "axios";

//import house from "../assests/svg/home2.svg";

function Homepage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessage = async () => {
      let message = await axios.get(`http://localhost:5000/`);
      console.log(message);
    };

    getMessage();
  }, []);

  return (
    <div>
      <div id="homepage">
        <div className="homepage-hero">
          <h1>
            Exchange <br />
            your rental <br />
            house
          </h1>

          <button className="primary-button">
            <a href="#how-does-it-work">How does it work?</a>
          </button>
          <button className="transparent-button">
            <a href="#">Find A house</a>
          </button>
        </div>
        <div className="svg">
          <HomeSVG />
          {/* <img src={house} /> */}
        </div>
      </div>
      <HowSection />
    </div>
  );
}

export default Homepage;
