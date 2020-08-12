import React from "react";
import "jsdom-global/register";
import { shallow } from "enzyme";
import Search from "../../../../src/Components/Search/Search";
import axios from "axios";

jest.mock("../../../../src/Config/configurations", () => ({
  API_URL: "http://test",
}));

jest.mock("axios");

describe("Search ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it("should be mount correctly", () => {
    expect(wrapper.find("div").length).toBe(6);
  });

  it("renderSearchResults: component search result should be props results correct", () => {
    const event = { preventDefault: () => {} };
    wrapper.setState({ results: [{}] });
    expect(wrapper.instance().renderSearchResults(event).props).toEqual({
      results: [{}],
    });
  });

  it("handleOnInputChange: component search result should be props results correct when is empty value", async () => {
    const event = {
      preventDefault() {},
      target: { value: "" },
    };

    await wrapper.instance().handleOnInputChange(event);

    expect(wrapper.state().message).toBe("");
  });

  it("handleOnInputChange: component search result should be props results correct", async () => {
    const event = {
      preventDefault() {},
      target: { value: "newValue" },
    };
    const users = [{ name: "Luis" }];
    const resp = { data: users };
    axios.get.mockResolvedValue(resp);
    axios.CancelToken.source.mockResolvedValue({});

    await wrapper.instance().handleOnInputChange(event);

    expect(wrapper.state().message).toBe(
      "Se encontraron 1 resultado para newValue"
    );
  });
});
