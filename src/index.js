import { createRoot } from "react-dom/client";

import App from "./App";
import { Drawer, Row, Col, Form, Button, Input, Select } from "antd";
import "antd/dist/antd.css";
import { Header } from "antd/lib/layout/layout";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div>
    <Row>
      <header>
        <Form>
          <Input />
          <Button>Button</Button>
        </Form>
      </header>
    </Row>

    <Drawer size={"200px"} visible={"true"}>
      <Row layout={"horizontal"}>
        <Col>В очереди 5 человек</Col>
      </Row>
      <Row>
        <Col>15:00</Col>
      </Row>
      <Row layout={"horizontal"}>
        <Col>Иванов Иван Иванович</Col>
      </Row>
      <Row layout={"horizontal"}>
        <Col>Иванов Иван Иванович</Col>
      </Row>
      <Row layout={"horizontal"}>
        <Col>Иванов Иван Иванович</Col>
      </Row>
      <Row layout={"horizontal"}>
        <Col>Иванов Иван Иванович</Col>
      </Row>
      <Row layout={"horizontal"}>
        <Col>Иванов Иван Иванович</Col>
      </Row>
    </Drawer>

    <App />
  </div>
);
