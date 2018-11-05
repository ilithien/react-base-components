import React from "react";
import renderer from "react-test-renderer";
import Card from "./Card";

describe("Testing Card component", () => {
  it("matches snapshot", () => {
    const snap = renderer.create(
      <Card />
    );

    const tree = snap.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
