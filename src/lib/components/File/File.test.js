import React from "react";
import renderer from "react-test-renderer";
import File from "./File";

describe("Testing File input component", () => {
  it("matches snapshot", () => {
    const snap = renderer.create(
      <File onLoadImage={result => console.log(`Loaded image ${result}`)} />
    );

    const tree = snap.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
