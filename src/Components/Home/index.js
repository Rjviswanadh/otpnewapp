import React from "react";
import OptSuccess from "../OptSuccess";
import "./index.css";

class Home extends React.Component {
  state = {
    number: 0,
    randomNum: 0,
  };
  mobilenumber = (e) => {
    this.setState({ number: e.target.value });
  };
  genarateOTP = () => {
    const { number } = this.state;
    console.log(typeof parseInt(number));
    if (number.length === 10 && typeof number === "string") {
      const result = Math.random() * 10000;
      const final = Math.ceil(result);
      const result1 = JSON.stringify(final);
      this.setState({ randomNum: result1 });
    }
  };
  renderHome = () => {
    return (
      <>
        <div className="logo-image mobile-screen">
          <img
            src={
              "https://res.cloudinary.com/dh0wwy8i8/image/upload/v1695783083/AK_logo_1_enh8zu.svg"
            }
            alt="logo-img"
          />
          <div className="mobile-screen">
            <div>
              <h1>Welcome Back</h1>
              <p>Please sign in to your account</p>
            </div>
            <div className="input-field input-border">
              <select className="input-field">
                <option>+91</option>
                <option>+001</option>
                <option>+11</option>
              </select>
              <div>
                <input
                  onChange={this.mobilenumber}
                  placeholder="Enter Contact Number"
                />
              </div>
            </div>
            <p>
              We will send you a one time SMS message.
              <br />
              Charges may apply
            </p>
            <button onClick={this.genarateOTP} type="button">
              Sign in with OTP
            </button>
          </div>
        </div>
      </>
    );
  };

  render() {
    const { randomNum } = this.state;

    return (
      <>
        <div>
          <div>
            {randomNum.length !== 4 ? (
              <>{this.renderHome()}</>
            ) : (
              <OptSuccess random={randomNum} />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
