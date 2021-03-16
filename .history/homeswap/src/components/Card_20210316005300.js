import React from "react";
import "../css/card.css";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
function Card({ userHouse, requestedHouse }) {
  return (
    <div className="card-container" style={{ display: "flex" }}>
      <ul>
        <h4>Offers</h4>
        <li> Province: {userHouse.province} </li>
        <li> Municipality: {userHouse.municipality} </li>
        <li> District: {userHouse.district} </li>
        <li> Zipcode: {userHouse.zipcode}</li>
        <li> Hometype: {userHouse.hometype} </li>
        <li> Floor: {userHouse.floor} </li>
        <li> Rooms: {userHouse.rooms} </li>
        <li> Area: {userHouse.area} </li>
        <li> Rent: {userHouse.rent} </li>
        <li> Features: {userHouse.features} </li>
        <li> Facilities: {userHouse.facilities} </li>
        <li> Description: {userHouse.description} </li>
      </ul>
      <SyncAltIcon
        style={{ alignSelf: "center", margin: "2rem", fontSize: "4rem" }}
      />
      <ul>
        <h4>Requests</h4>
        <li> Province: {requestedHouse.province} </li>
        <li> Municipality: {requestedHouse.municipality} </li>
        <li> District: {requestedHouse.district} </li>
        <li> Zipcode: {requestedHouse.zipcode}</li>
        <li> Hometype: {requestedHouse.hometype} </li>
        <li> Floor: {requestedHouse.floor} </li>
        <li> Rooms: {requestedHouse.rooms} </li>
        <li> Area: {requestedHouse.area} </li>
        <li> Rent: {requestedHouse.rent} </li>
        <li> Features: {requestedHouse.features} </li>
        <li> Facilities: {requestedHouse.facilities} </li>
        <li> Description: {requestedHouse.description} </li>
      </ul>
    </div>
  );
}

export default Card;
