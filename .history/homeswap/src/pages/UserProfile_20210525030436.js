import React, { useState } from "react";
import SwapForm from "../components/SwapForm";

import { BiAddToQueue } from "react-icons/bi";

function UserProfile({ user, getAllHomes }) {
  let [add, setAdd] = useState(false);
  return (
    <div id="profile">
      <div className="profile-menu">
        <div className="avatar"></div>

        <ul>
          <li> My Ads</li>
          <li>Settings</li>
        </ul>
      </div>
      {add ? (
        <SwapForm user={user} getAllHomes={getAllHomes} />
      ) : (
        <div>
          <BiAddToQueue />
        </div>
      )}
    </div>
  );
}

export default UserProfile;
