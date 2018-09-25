import React from "react";
import renderer from "react-test-renderer";
import Text from "./Text";

describe("Testing Text component", () => {
  it("matches snapshot", () => {
    const snap = renderer.create(<Text />);

    const tree = snap.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
