import React from "react";

class SearchResults extends React.PureComponent {
  render() {
    const { results } = this.props;
    let despacho = require("assets/img/despacho-icon.svg");
    let delivery = require("assets/img/delivery-icon.svg");

    return (
      <div className="ais-Hits">
        <ul className="ais-Hits-list">
          {results.map((result) => {
            return (
              <li key={result.id} className="ais-Hits-item">
                <div>
                  <div
                    id={result.id}
                    className="rct-block  product-block flex-column justify-content-between overflow-hidden bg-white"
                  >
                    <a
                      href={result.image}
                      style={{
                        textDecoration: "none",
                        height: "100%",
                        display: "inline",
                        backgroundColor: "white",
                      }}
                    >
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
                                src={"https://" + result.image}
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
                      <div className="product-info">
                        <div className="d-flex text-left product-description ">
                          <div>
                            <span
                              style={{
                                color: "rgb(0, 0, 0)",
                                fontWeight: "bold",
                              }}
                            >
                              {result.brand}
                            </span>
                            <span> {result.description}</span>
                          </div>
                        </div>
                        <div className="mb-12">
                          <div
                            className="walmart-sales-price d-flex "
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            $ {result.price}
                            {result.priceBeforeDiscount != 0 ? (
                              <div
                                className="walmart-discount-percentage-card"
                                style={{ marginTop: "1px", marginLeft: "6px" }}
                              >
                                50%
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          {result.priceBeforeDiscount != 0 ? (
                            <div className="d-flex">
                              <span className="walmart-reference-price">
                                {result.priceBeforeDiscount}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}
                          <div
                            className="d-flex"
                            style={{ position: "absolute", bottom: "56px" }}
                          >
                            <div className="d-flex home-delivery-container">
                              <span className="home-delivery-image">
                                <img
                                  className="vertical-align"
                                  width="17"
                                  height="20"
                                  src={despacho}
                                />
                              </span>
                              <span className="home-delivery-text">
                                despacho
                              </span>
                            </div>
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
                          </div>

                          <div>
                            <div
                              class="walmart-add-cart-button-container"
                              style={{ justifyContent: "center", width: "95%" }}
                            >
                              <span
                                id="addProductToCart"
                                class="ProductCardButton__AddToCartButton-sc-1r8ezq4-0 iRLHuO walmart-add-cart-button pt-5 text-center cp-no-select"
                              >
                                Agregar
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
