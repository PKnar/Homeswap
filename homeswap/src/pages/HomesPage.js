import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
function HomesPage({ houses }) {
  return (
    <div>
      {houses.length > 0 && (
        <table>
          <thead>
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
          </thead>

          <tbody>
            {houses.map((house) => {
              let { userHouse, requestedHouse } = house;

              return (
                <tr>
                  <td>{userHouse.municipality}</td>
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
          </tbody>
        </table>
      )}
    </div>
  );
}

export default HomesPage;
