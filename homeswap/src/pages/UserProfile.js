import React, { useState } from "react";
import SwapForm from "../components/SwapForm";

function UserProfile({ user }) {
  return (
    <div>
      <SwapForm user={user} />
    </div>
  );
}

export default UserProfile;
