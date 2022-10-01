import { Drawer, Row, Col, Form, Input } from "antd";

const AppDrawer = (data) => {
  let drawerConfig = {
    title: "App",
    size: "200px",
    visible: true
  };
  return <Drawer {...drawerConfig}>Data</Drawer>;
};

module.exports = { AppDrawer };
