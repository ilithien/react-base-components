import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Select, File, Button, Text } from "../src/lib";

storiesOf("Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));

storiesOf("Text", module)
  .add("basic text input raw", () => <Text />)
  .add("with label", () => <Text label="My input" />)
  .add("with placeholder and label", () => (
    <Text
      name="coolName"
      id="myId"
      label="My input"
      placeholder="Write something"
      onChange={action(`I'm changing`)}
    />
  ));

storiesOf("File Input", module).add("basic file input", () => (
  <File onLoadFile={action("Something loaded")} />
));

storiesOf("Select input", module)
  .add("with first option selected", () => (
    <Select
      options={[
        { value: 1, label: "Java" },
        { value: 2, label: "JavaScript" },
        { value: 3, label: "Php" }
      ]}
      onValueChange={action("Value changed")}
    />
  ))
  .add("with placeholder text", () => (
    <Select
      options={[
        { value: 1, label: "Java" },
        { value: 2, label: "JavaScript" },
        { value: 3, label: "Php" }
      ]}
      placeholder="Select one option..."
      onValueChange={action("Value changed")}
    />
  ))
  .add("with default value", () => (
    <Select
      options={[
        { value: 1, label: "Java" },
        { value: 2, label: "JavaScript" },
        { value: 3, label: "Php" }
      ]}
      defaultValue={{ value: 2, label: "JavaScript" }}
      onValueChange={action("Value changed")}
    />
  ));
