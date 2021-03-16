import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import { useHistory } from "react-router-dom";
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
    <div id="homes">
      {list.length > 0 && (
        <table>
          <tr>
            <th>Offers</th>
            <th>Home type</th>
            <th>Rent</th>
            <th>Rooms</th>
            <th>Requested</th>
            <th>Home type</th>
            <th>Rent</th>
            <th>Rooms</th>
          </tr>

          {list.map((house) => {
            let { userHouse, requestedHouse } = house;

            return (
              <tr>
                <td>
                  {" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      updateSelectedHouse(house);
                      history.push("/details");
                    }}
                  >
                    {userHouse.municipality}
                  </a>
                </td>
                <td>{userHouse.hometype}</td>
                <td>{userHouse.rent}</td>
                <td>{userHouse.rooms}</td>
                <td>{requestedHouse.municipality}</td>
                <td>{requestedHouse.hometype}</td>
                <td>{requestedHouse.rent}</td>
                <td>{requestedHouse.rooms}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
}

export default HomesPage;
