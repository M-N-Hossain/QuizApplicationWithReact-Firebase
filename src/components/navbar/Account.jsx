import React from "react";
import { Link } from "react-router-dom";

// internal import
import "../../styles/account.css";

import { useAuth } from "../../contexts/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="account">
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
