import React from "react";
import { shallow } from "enzyme";
import SearchResults from "../../../../src/Components/SearchResults/SearchResults";

describe("Search Results ", () => {
  const results = [
    {
      id: 1,
      brand: "brand",
      description: "description",
      image: "image",
      price: 3000,
      priceBeforeDiscount: 0,
    },
    {
      id: 2,
      brand: "brand2",
      description: "description2",
      image: "image2",
      price: 1500,
      priceBeforeDiscount: 3000,
    },
  ];

  const wrapper = shallow(<SearchResults results={results} />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(21);
  });

  it("should be two li", () => {
    expect(wrapper.find("li").length).toBe(2);
  });

  it("elements first iteration must have correct values", () => {
    const firstLi = wrapper.find("li").first();

    expect(firstLi.find("div.rct-block").prop("id")).toBe(1);
    expect(firstLi.find("a").prop("href")).toBe("image");
    expect(
      firstLi
        .find("span")
        .first()
        .html()
    ).toBe('<span style="color:rgb(0, 0, 0);font-weight:bold">brand</span>');
    expect(firstLi.find("div.walmart-sales-price").html()).toBe(
      '<div class="walmart-sales-price d-flex " style="display:flex;align-items:center">$ 3000</div>'
    );
  });

  it("elements second iteration must have correct values", () => {
    const secondLi = wrapper.find("li").at(1);

    expect(secondLi.find("div.rct-block").prop("id")).toBe(2);
    expect(secondLi.find("a").prop("href")).toBe("image2");
    expect(
      secondLi
        .find("span")
        .first()
        .html()
    ).toBe('<span style="color:rgb(0, 0, 0);font-weight:bold">brand2</span>');
    expect(secondLi.find("div.walmart-sales-price").html()).toBe(
      '<div class="walmart-sales-price d-flex " style="display:flex;align-items:center">$ 1500<div class="walmart-discount-percentage-card" style="margin-top:1px;margin-left:6px">50%</div></div>'
    );
    expect(secondLi.find("span.walmart-reference-price").html()).toBe(
      '<span class="walmart-reference-price">3000</span>'
    );
  });
});
