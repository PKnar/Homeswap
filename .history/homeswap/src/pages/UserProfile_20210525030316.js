import React, { useState } from "react";
import SwapForm from "../components/SwapForm";

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
      {add ? <SwapForm user={user} getAllHomes={getAllHomes} /> : <div></div>}
    </div>
  );
}

export default UserProfile;
