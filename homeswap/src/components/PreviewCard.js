import React from "react";
import { useHistory } from "react-router-dom";

function PreviewCard({ updateSelectedHouse, placeholderImage, house }) {
  let { userHouse, requestedHouse } = house;
  let { municipality: city, hometype: type, rooms } = userHouse;
  let {
    municipality: reqCity,
    hometype: reqType,
    rooms: reqRooms,
  } = requestedHouse;

  let history = useHistory();

  let handleCardClick = (e, house) => {
    e.preventDefault();
    updateSelectedHouse(house);
    history.push("/details");
  };

  return (
    <div className="rental-card">
      <div
        className="rental-image"
        style={{
          backgroundImage: `url(${placeholderImage})`,
        }}
      ></div>
      <div className="rental-detail">
        <div className="flex-row">
          <div className="offers info ">
            <h4>Offers</h4>
            <p>City: {city}</p>
            <p>Type: {type}</p>
            <p>Rooms:{rooms}</p>
          </div>

          <div className="request  info">
            <h4>Requests</h4>
            <p>City: {reqCity}</p>
            <p>Type: {reqType}</p>
            <p>Rooms:{reqRooms}</p>
          </div>
        </div>
        <button
          className="view-button"
          onClick={(e) => handleCardClick(e, house)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PreviewCard;
