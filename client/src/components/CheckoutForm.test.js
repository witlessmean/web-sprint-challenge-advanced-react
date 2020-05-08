import React from "react";
import CheckoutForm from "./CheckoutForm";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
// Write up the two tests here and make sure they are testing what the title shows

// test("form header renders", () => {});

// test("form shows success message on submit with form details", () => {});

describe("Header tests", () => {
  it("Header should render to the user", () => {
    const wrapper = shallow(<CheckoutForm />);
    expect(wrapper.find("nav.container"));
  });
});

describe("Form button tests", () => {
  it("form shows success message on submit with form details", () => {
    const wrapper = shallow(<CheckoutForm />);
    expect(
      wrapper.find("form button").simulate("click").find("div.success-message")
    );
  });
});
