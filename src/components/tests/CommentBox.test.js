import React from "react";
import { mount } from "enzyme";
import Root from "Root";

import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("Has a text area and two buttons", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("The text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", { target: { value: "hello" } });
    wrapper.update();
  });

  it("Has a text area that users can type in", () => {
    // expect(wrapper.instance().state().comment).toEqual("hello");
    expect(wrapper.find("textarea").prop("value")).toEqual("hello");
  });

  it("Clears the text area on submit", () => {
    // expect(wrapper.state().comment).toEqual("hello");
    expect(wrapper.find("textarea").prop("value")).toEqual("hello");

    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    wrapper.update();
    // expect(wrapper.state().comment).toEqual("");
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
