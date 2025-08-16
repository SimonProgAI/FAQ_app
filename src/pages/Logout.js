import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ uname, handleLogout }) => {
  handleLogout(); // function call when loading Logout page
  const navigate = useNavigate();
  console.log(`User ${uname} logged out`);
  useEffect(() => {
    if (uname === null) {
      navigate("/login");
    }
  }, [uname, navigate]);

  return (
    <div>
      <h1>User logged out</h1>
    </div>
  );
};

export default Logout;
