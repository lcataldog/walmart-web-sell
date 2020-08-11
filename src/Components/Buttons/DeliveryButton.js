import React from "react";
import delivery from "../../assets/img/delivery-icon.svg";

class DeliveryButton extends React.PureComponent {
  render() {
    return (
      <div className="d-flex site-to-store-container">
        <span className="site-to-store-image">
          <img
            className="vertical-align"
            src={delivery}
            width="17"
            height="20"
          />
        </span>
        <span className="site-to-store-text">retiro</span>
      </div>
    );
  }
}

export default DeliveryButton;
