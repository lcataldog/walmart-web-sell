import React from "react";
import despacho from "../../assets/img/despacho-icon.svg";

class RetreatButton extends React.PureComponent {
  render() {
    return (
      <div className="d-flex home-delivery-container">
        <span className="home-delivery-image">
          <img
            className="vertical-align"
            width="17"
            height="20"
            src={despacho}
          />
        </span>
        <span className="home-delivery-text">despacho</span>
      </div>
    );
  }
}

export default RetreatButton;
