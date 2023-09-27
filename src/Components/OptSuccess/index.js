import React from "react";
import "./index.css";
import Welcomepage from "../Welcomepage";
//import { Link } from "react-router-dom";
const OptSuccess = (props) => {
  const [OTP, setOTP] = React.useState();
  const [trueorfalse, settrueorfalse] = React.useState(true);
  const { random } = props;
  console.log(random);

  const getOTP = (e) => {
    setOTP(e.target.value);
  };

  const verifyOtp = (e) => {
    if (random === OTP) {
      settrueorfalse(false);
    } else {
      settrueorfalse(true);
    }
  };
  console.log(trueorfalse);
  const renderOTP = () => (
    <div>
      <div className="otp">
        <img
          src="https://res.cloudinary.com/dh0wwy8i8/image/upload/v1695783092/undraw_confirmed_81ex_qw6bkp.svg"
          alt="otp-page"
        />
        <div className="otp-number">
          <h1>Please verify Mobile Number</h1>
          <p>An OTP is sent to </p>
          <p>Change phone number</p>
        </div>
        <input onChange={getOTP} />
        <div className="resend">
          <p>Didn't receive the code?</p>
          <a href="/">Resend</a>
        </div>
        <button onClick={verifyOtp}>Verify</button>
      </div>
      <p className="otp-number">Your OTP {random}</p>
    </div>
  );

  return (
    <>
      <div>{trueorfalse ? <>{renderOTP()}</> : <Welcomepage />}</div>
    </>
  );
};

export default OptSuccess;
