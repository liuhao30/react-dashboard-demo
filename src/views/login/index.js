import React from "react";
import { Form, Input, Button, Checkbox, Avatar } from "antd";
import {
  UserOutlined,
  LockOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import backgroundImage from "../../assets/img/background.jpeg";

const onFinish = (values) => {
  console.log(values);
};

const Login = () => (
  <div style={styles.backgroundBox}>
    <Form
      style={styles.loginForm}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Avatar
          size={{
            xs: 24,
            sm: 32,
            md: 40,
            lg: 64,
            xl: 80,
            xxl: 100,
          }}
          icon={<AntDesignOutlined />}
        />
      </div>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/index">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/index123">register now!</Link>
      </Form.Item>
    </Form>
  </div>
);

const styles = {
  backgroundBox: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "300px",
  },
};

export default Login;
