import React from "react";
import { shallow } from "enzyme";
import RetreatButton from "../../../../src/Components/Buttons/RetreatButton";

describe("Retreat Button ", () => {
  const wrapper = shallow(<RetreatButton />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
});
