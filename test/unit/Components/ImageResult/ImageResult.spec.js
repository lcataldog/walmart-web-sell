import React from "react";
import { shallow } from "enzyme";
import ImageResult from "../../../../src/Components/ImageResult/ImageResult";

describe("Image Result ", () => {
  const image = "https://test.svg";
  const wrapper = shallow(<ImageResult image={image} />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(7);
  });

  it("should be prop src correct", () => {
    expect(wrapper.find("img").prop("src")).toBe("https://test.svg");
  });
});
