import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Select, File, Button, Text } from "../src/lib";
import Card from "../src/lib/components/Card";

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


  storiesOf("Card example", module)
      .add("with image, content and description (inside flex)", () => (
        <div style={{ display: 'flex' }}>
        <Card image="http://iamheremagazine.com/wp-content/uploads/2017/12/rels-b.jpg" title="Rels B" description="Me gusta ser el chico bueno del hip-hop" />
        <Card image="https://www.conciertosengranada.es/doc/a/2017/a_relsb.jpg" title="Rels B" description="Todo machismo en la música debería ser censurado" />
        <Card image="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/04/30/15250815122262.jpg" title="Rels B" description="Me gusta ser el chico bueno del hip-hop" />
        </div>
      ))
      .add("with image, content and description (block)", () => (
        <div style={{ display: 'block' }}>
        <Card image="http://iamheremagazine.com/wp-content/uploads/2017/12/rels-b.jpg" title="Rels B" description="Me gusta ser el chico bueno del hip-hop" />
        <Card image="https://www.conciertosengranada.es/doc/a/2017/a_relsb.jpg" title="Rels B" description="Todo machismo en la música debería ser censurado" />
        <Card image="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/04/30/15250815122262.jpg" title="Rels B" description="Me gusta ser el chico bueno del hip-hop" />
        </div>
      ))