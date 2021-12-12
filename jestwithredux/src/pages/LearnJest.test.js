import React from "react";
import renderer from "react-test-renderer";
import LearnJest from "./LearnJest";

describe("LearnJest", () => {
  let component = null;
  it("renders correctly", () => {
    component = renderer.create(<LearnJest />);
  });

  it("matches snapshot", () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("add info correctly", () => {
    component.getInstance().setInfoHandler({ target: { name: "out_test", value: { name: "in_test", age: 100, job: "test" } } });
    expect(component.getInstance().info).toBe({ name: "in_test", age: 100, job: "test" });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
