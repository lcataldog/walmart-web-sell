import "jsdom-global/register";
import React from "react";

import { shallow, mount } from "enzyme";
import Search from "../../../src/Components/Search/Search";
import axios from "axios";

jest.mock("../../../src/Config/configurations", () => ({
  API_URL: "http://test",
}));

jest.mock("axios");

it("renders Search is correct", () => {
  const wrapper = shallow(<Search />);

  expect(wrapper.html()).toEqual(
    '<div><div class="site-header compact" style="background-color:rgb(4,30,66)"><div class="header-wrapper"><div class="logo"><a href="/catalogo"><img src="test-file-stub" style="width:152px;height:50px;margin-top:8px;margin-left:10px;padding-top:6px;margin-bottom:6px"/></a></div><div style="width:95%;margin:0px 3%"><div class="search-width"><div class="search-box-container-header" style="padding-top:10px"><section><div class="ais-InstantSearch__root"><div class="ais-InstantSearch__root"><div class="ais-SearchBox"><label class="search-label"><input type="text" name="query" value="" id="search-input" placeholder="¿Qué estás buscando?" maxLength="512" class="ais-SearchBox-input"/></label></div></div></div></section></div></div></div></div></div><div><div><span style="color:rgb(0, 0, 0);font-weight:bold"></span></div></div></div>'
  );
});

it("handleOnInputChange: return html with one product", async () => {
  const event = {
    preventDefault() {},
    target: { value: "newValue" },
  };
  const users = [{ name: "Luis" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);
  axios.CancelToken.source.mockResolvedValue({});

  const wrapper = mount(<Search />);
  await wrapper.instance().handleOnInputChange(event);

  expect(wrapper.html()).toEqual(
    '<div><div class="site-header compact" style="background-color: rgb(4, 30, 66);"><div class="header-wrapper"><div class="logo"><a href="/catalogo"><img src="test-file-stub" style="width: 152px; height: 50px; margin-top: 8px; margin-left: 10px; padding-top: 6px; margin-bottom: 6px;"></a></div><div style="width: 95%; margin: 0px 3%;"><div class="search-width"><div class="search-box-container-header" style="padding-top: 10px;"><section><div class="ais-InstantSearch__root"><div class="ais-InstantSearch__root"><div class="ais-SearchBox"><label class="search-label"><input type="text" name="query" id="search-input" placeholder="¿Qué estás buscando?" maxlength="512" class="ais-SearchBox-input" value="newValue"></label></div></div></div></section></div></div></div></div></div><div><div><span style="color: rgb(0, 0, 0); font-weight: bold;">Se encontraron 1 resultado para newValue</span></div><div class="ais-Hits"><ul class="ais-Hits-list"><li class="ais-Hits-item"><div><div class="rct-block  product-block flex-column justify-content-between overflow-hidden bg-white"><a style="text-decoration: none; height: 100%; display: inline; background-color: white;"><div class="overlay-wrap overflow-hidden bg-white" style="align-items: center; justify-content: center; max-height: 220px; width: 100%;"><div class="text-center"><div class="product-image-shadow"></div><div class="d-flex cyber-lider-cards-container"></div><div class="bg-white"><div><img class="img-hover-zoom img-fluid m-auto" src="https://undefined" style="filter: unset; min-width: 50px; max-height: 220px;"></div></div><div></div></div></div><div class="product-info"><div class="d-flex text-left product-description "><div><span style="color: rgb(0, 0, 0); font-weight: bold;"></span><span> </span></div></div><div class="mb-12"><div class="walmart-sales-price d-flex " style="display: flex; align-items: center;">$ <div class="walmart-discount-percentage-card" style="margin-top: 1px; margin-left: 6px;">50%</div></div><div class="d-flex"><span class="walmart-reference-price"></span></div><div class="d-flex" style="position: absolute; bottom: 56px;"><div class="d-flex home-delivery-container"><span class="home-delivery-image"><img class="vertical-align" width="17" height="20" src="test-file-stub"></span><span class="home-delivery-text">despacho</span></div><div>&nbsp;</div><div class="d-flex site-to-store-container"><span class="site-to-store-image"><img class="vertical-align" src="test-file-stub" width="17" height="20"></span><span class="site-to-store-text">retiro</span></div></div><div><div class="walmart-add-cart-button-container" style="justify-content: center; width: 95%;"><span id="addProductToCart" class="ProductCardButton__AddToCartButton-sc-1r8ezq4-0 iRLHuO walmart-add-cart-button pt-5 text-center cp-no-select">Agregar</span></div></div></div></div></a></div></div></li></ul></div></div></div>'
  );
});

it("handleOnInputChange: return html without product", async () => {
  const event = {
    preventDefault() {},
    target: {},
  };

  const resp = { data: null };
  axios.get.mockResolvedValue(resp);
  axios.CancelToken.source.mockResolvedValue({});

  const wrapper = mount(<Search />);
  await wrapper.instance().handleOnInputChange(event);

  expect(wrapper.html()).toEqual(
    '<div><div class="site-header compact" style="background-color: rgb(4, 30, 66);"><div class="header-wrapper"><div class="logo"><a href="/catalogo"><img src="test-file-stub" style="width: 152px; height: 50px; margin-top: 8px; margin-left: 10px; padding-top: 6px; margin-bottom: 6px;"></a></div><div style="width: 95%; margin: 0px 3%;"><div class="search-width"><div class="search-box-container-header" style="padding-top: 10px;"><section><div class="ais-InstantSearch__root"><div class="ais-InstantSearch__root"><div class="ais-SearchBox"><label class="search-label"><input type="text" name="query" id="search-input" placeholder="¿Qué estás buscando?" maxlength="512" class="ais-SearchBox-input" value=""></label></div></div></div></section></div></div></div></div></div><div><div><span style="color: rgb(0, 0, 0); font-weight: bold;"></span></div></div></div>'
  );
});
