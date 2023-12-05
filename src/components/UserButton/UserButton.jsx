import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

function UserButton({ data }) {
  return (
    <div>
      <button>{data.loginUser}</button>
    </div>
  );
}

export default UserButton;
