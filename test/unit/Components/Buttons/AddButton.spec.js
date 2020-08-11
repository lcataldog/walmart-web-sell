import React from "react";
import { shallow } from "enzyme";
import AddButton from "../../../../src/Components/Buttons/AddButton";

describe("Add Button ", () => {
  const wrapper = shallow(<AddButton />);

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(2);
  });
});
