import React from "react";
import logo from "../../assets/img/cyber-lider-logo.svg";

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <a href="/catalogo">
          <img
            src={logo}
            style={{
              width: "152px",
              height: "50px",
              marginTop: "8px",
              marginLeft: "10px",
              paddingTop: "6px",
              marginBottom: "6px",
            }}
          />
        </a>
      </div>
    );
  }
}

export default Logo;
