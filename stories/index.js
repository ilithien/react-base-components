import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../src/lib/components/button";
import Text from "../src/lib/components/text";

storiesOf("Button", module).add("with text", () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
));

storiesOf("Text", module)
  .add("basic text input raw", () => <Text />)
  .add("basic text input with label", () => <Text label="My input" />)
  .add("complete text input", () => (
    <Text
      name="coolName"
      id="myId"
      label="My input"
      placeholder="Write something"
      onChange={action(`I'm changing`)}
    />
  ));
