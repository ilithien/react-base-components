import React from "react";
import renderer from "react-test-renderer";
import Select from "./Select";

describe("Testing Select input component", () => {
  it("matches snapshot", () => {
    const snap = renderer.create(
      <Select
        options={[
          { value: 1, label: "Hey" },
          { value: 2, label: "You" },
          { value: 3, label: "Baby" }
        ]}
        onValueChange={() => console.log("Changing cool value bro")}
      />
    );

    const tree = snap.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
