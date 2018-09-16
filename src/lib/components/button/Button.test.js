import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Testing Button component", () => {
  it("matches snapshot", () => {
    const snap = renderer.create(<Button />);

    const tree = snap.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
