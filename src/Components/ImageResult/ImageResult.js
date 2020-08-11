import React from "react";

class ImageResult extends React.PureComponent {
  render() {
    const { image } = this.props;
    return (
      <div
        className="overlay-wrap overflow-hidden bg-white"
        style={{
          alignItems: "center",
          justifyContent: "center",
          maxHeight: "220px",
          width: "100%",
        }}
      >
        <div className="text-center">
          <div className="product-image-shadow" />
          <div className="d-flex cyber-lider-cards-container" />
          <div className="bg-white">
            <div>
              <img
                className="img-hover-zoom img-fluid m-auto"
                src={image}
                style={{
                  filter: "unset",
                  minWidth: "50px",
                  maxHeight: "220px",
                }}
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default ImageResult;
