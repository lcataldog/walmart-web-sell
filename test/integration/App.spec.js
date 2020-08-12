import React from "react";
import { shallow } from "enzyme";
import App from "../../src/App";

it("renders App is correct", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.html()).toEqual(
    '<div class="App"><div><div class="site-header compact" style="background-color:rgb(4,30,66)"><div class="header-wrapper"><div class="logo"><a href="/catalogo"><img src="test-file-stub" style="width:152px;height:50px;margin-top:8px;margin-left:10px;padding-top:6px;margin-bottom:6px"/></a></div><div style="width:95%;margin:0px 3%"><div class="search-width"><div class="search-box-container-header" style="padding-top:10px"><section><div class="ais-InstantSearch__root"><div class="ais-InstantSearch__root"><div class="ais-SearchBox"><label class="search-label"><input type="text" name="query" value="" id="search-input" placeholder="¿Qué estás buscando?" maxLength="512" class="ais-SearchBox-input"/></label></div></div></div></section></div></div></div></div></div><div><div><span style="color:rgb(0, 0, 0);font-weight:bold"></span></div></div></div></div>'
  );
});
