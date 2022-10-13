import "./styles.css";

// import { Header } from "antd/lib/layout/layout";
import {
  Space,
  Container,
  Tag,
  Drawer,
  Row,
  Col,
  Form,
  Button,
  Input,
  Select
} from "antd";

export default function App() {
  return (
    <div className="App">
      <h2>Авторизация</h2>
      <Space>
        <Row>
          <Form id="authWeb">
            <Form.Item>
              <Input placeholder="Имя пользователя" />
            </Form.Item>
            <Form.Item>
              <Input type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Домен" />
            </Form.Item>

            <Button type="submit">Далее</Button>
          </Form>
        </Row>
      </Space>
    </div>
  );
}
