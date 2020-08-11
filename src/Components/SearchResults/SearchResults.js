import React from "react";
import ImageResult from "../ImageResult/ImageResult";
import AddButton from "../Buttons/AddButton";
import DeliveryButton from "../Buttons/DeliveryButton";
import RetreatButton from "../Buttons/RetreatButton";

class SearchResults extends React.PureComponent {
  render() {
    const { results } = this.props;
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
                      <ImageResult image={"https://" + result.image} />
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
                            <RetreatButton />
                            <div>&nbsp;</div>
                            <DeliveryButton />
                          </div>
                          <AddButton />
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
