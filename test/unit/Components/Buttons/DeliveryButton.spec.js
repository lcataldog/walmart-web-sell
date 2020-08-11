import React from "react";
import { shallow } from "enzyme";
import DeliveryButton from "../../../../src/Components/Buttons/DeliveryButton";

describe("Delivery Button ", () => {
  const wrapper = shallow(<DeliveryButton />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
});
