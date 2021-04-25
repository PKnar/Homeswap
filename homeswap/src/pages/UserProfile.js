import React, { useState } from "react";
import SwapForm from "../components/SwapForm";

function UserProfile({ user, getAllHomes }) {
  return (
    <div id="profile">
      <div className="profile-menu">
        <div className="avatar"></div>

        <ul>
          <li> My Ads</li>
          <li>Settings</li>
        </ul>
      </div>

      <SwapForm user={user} getAllHomes={getAllHomes} />
    </div>
  );
}

export default UserProfile;
