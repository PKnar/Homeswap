import React, { useState } from "react";
import SwapForm from "../components/SwapForm";

function UserProfile({ user, getAllHomes }) {
  return (
    <div>
      <h3>Hello {user.name}</h3>
      <SwapForm user={user} getAllHomes={getAllHomes} />
    </div>
  );
}

export default UserProfile;
