import React from "react";
import { shallow } from "enzyme";
import SearchInput from "../../../../src/Components/SearchInput/SearchInput";

describe("Search Input ", () => {
  const query = "181";
  const MockHandleOnInputChange = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: "newValue" },
  };

  const wrapper = shallow(
    <SearchInput query={query} handleOnInputChange={MockHandleOnInputChange} />
  );

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(4);
  });

  it("should be prop query correct", () => {
    expect(wrapper.find("input").prop("value")).toBe("181");
  });

  it("Simulates onChange in Search Input", () => {
    wrapper.find("input").simulate("change", event);
    expect(MockHandleOnInputChange.mock.calls[0][0].target.value).toBe(
      "newValue"
    );
  });
});
