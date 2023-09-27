import React from "react";
import "./index.css";

const Welcomepage = () => {
  return (
    <div className="welcome">
      <img
        src="https://res.cloudinary.com/dh0wwy8i8/image/upload/v1695783099/Artboard_1_egz580.svg"
        alt="welcome-page"
      />
      <div>
        <h1>Welcome to AdmitKard</h1>
        <p>In order to provide you with a custom experience</p>
        <p>we need to ask you a few questions.</p>
      </div>
      <button>Get Started</button>
      <p>*This will only take 5mins</p>
    </div>
  );
};

export default Welcomepage;
