import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { useHistory } from "react-router-dom";
import "../css/homes.css";
import { dutchCities } from "../cities.js";

import placeholder from "../assests/images/placeholder-image.jpeg";
import PreviewCard from "../components/PreviewCard";
import { DragHandle } from "@material-ui/icons";
import img from "../assests/images/1.jpg";

import "../css/homes.css";

function HomesPage({ houses, updateSelectedHouse }) {
  let loggedUser = JSON.parse(localStorage.getItem("user"));
  let [list, setList] = useState(houses);
  let history = useHistory();

  useEffect(() => {
    if (loggedUser) {
      let filtered = houses.filter((house) => house.user !== loggedUser._id);
      setList(filtered);
    }
  }, []);

  return (
    <section id="rentals-section">
      <form>
        <select>
          <option value="" disabled selected>
            Select your city
          </option>
          {dutchCities.map((city) => {
            return <option value={city.city}>{city.city}</option>;
          })}
        </select>
        <select>
          <option value="" disabled selected>
            Move to
          </option>
          {dutchCities.map((city) => {
            return <option value={city.city}>{city.city}</option>;
          })}
        </select>
        <select>
          <option selected disabled>
            Type of house
          </option>
          <option>Apartament</option>
          <option>Studio</option>
        </select>
        <select>
          <option selected disabled>
            Number of rooms
          </option>
        </select>
        <button id="filter">Filter</button>
      </form>
      {/* <div className="filters">
        <label>Home type</label>
        <select>
          <option>Apartament</option>
          <option>Studio</option>
        </select>
        <label>Offers from</label>
        <select
          // onChange={(e) =>
          //   this.setState((prevState) => ({
          //     userHouse: {
          //       ...prevState.userHouse,
          //       municipality: e.target.value,
          //     },
          //   }))
          //}
          required
          name="municipality"
          id="municipality"
        >
          {" "}
          *
          <option value="" disabled selected>
            Select your city
          </option>
          {dutchCities.map((city) => {
            return <option value={city.city}>{city.city}</option>;
          })}
        </select>
      </div> */}

      <div className="rentals-list">
        {list.map((house) => {
          return (
            <PreviewCard
              placeholderImage={placeholder}
              house={house}
              updateSelectedHouse={updateSelectedHouse}
            />
          );
        })}

        <div className="rental-card">
          <div
            className="rental-image"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <div className="rental-detail">
            <div className="flex-row">
              <div className="offers info ">
                <h4>Offers</h4>
                <p>City: Utrecht</p>
                <p>Type: Apartament</p>
                <p>Rooms:3</p>
              </div>

              <div className="request  info">
                <h4>Requests</h4>
                <p>City: Zwolle</p>
                <p>Type: Apartament</p>
                <p>Rooms:4</p>
              </div>
            </div>
            <button
              className="view-button"
              // onClick={(e) => handleCardClick(e, house)}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="rental-card">
          <div
            className="rental-image"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <div className="rental-detail">
            <div className="flex-row">
              <div className="offers info ">
                <h4>Offers</h4>
                <p>City: Utrecht</p>
                <p>Type: Apartament</p>
                <p>Rooms:3</p>
              </div>

              <div className="request  info">
                <h4>Requests</h4>
                <p>City: Zwolle</p>
                <p>Type: Apartament</p>
                <p>Rooms:4</p>
              </div>
            </div>
            <button
              className="view-button"
              // onClick={(e) => handleCardClick(e, house)}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="rental-card">
          <div
            className="rental-image"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <div className="rental-detail">
            <div className="flex-row">
              <div className="offers info ">
                <h4>Offers</h4>
                <p>City: Utrecht</p>
                <p>Type: Apartament</p>
                <p>Rooms:3</p>
              </div>

              <div className="request  info">
                <h4>Requests</h4>
                <p>City: Zwolle</p>
                <p>Type: Apartament</p>
                <p>Rooms:4</p>
              </div>
            </div>
            <button
              className="view-button"
              // onClick={(e) => handleCardClick(e, house)}
            >
              View Details
            </button>
          </div>
        </div>
        <div className="rental-card">
          <div
            className="rental-image"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <div className="rental-detail">
            <div className="flex-row">
              <div className="offers info ">
                <h4>Offers</h4>
                <p>City: Utrecht</p>
                <p>Type: Apartament</p>
                <p>Rooms:3</p>
              </div>

              <div className="request  info">
                <h4>Requests</h4>
                <p>City: Zwolle</p>
                <p>Type: Apartament</p>
                <p>Rooms:4</p>
              </div>
            </div>
            <button
              className="view-button"
              // onClick={(e) => handleCardClick(e, house)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomesPage;
