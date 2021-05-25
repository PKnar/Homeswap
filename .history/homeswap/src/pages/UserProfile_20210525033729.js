import React, { useState } from "react";
import SwapForm from "../components/SwapForm";

import { BiAddToQueue } from "react-icons/bi";
import { BiSpreadsheet } from "react-icons/bi";

function UserProfile({ user, getAllHomes }) {
  let [add, setAdd] = useState(false);
  return (
    <div id="profile">
      <div className="profile-menu">
        <div className="avatar"></div>

        <ul>
          <li> My Ads</li>
          <li>Notifications</li>
          <li>Delete Account</li>
        </ul>
      </div>
      <div className="ads-block">
        {add ? (
          <SwapForm user={user} getAllHomes={getAllHomes} />
        ) : (
          <div className="add-new">
            Add New Advertisement
            <BiAddToQueue class="icon" />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
