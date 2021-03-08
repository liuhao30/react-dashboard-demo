import React from "react";
import { Form, Input, Button, Checkbox, Avatar } from "antd";
import {
  UserOutlined,
  LockOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/img/background.jpeg";
import { useHistory } from "react-router-dom";
import { authenticateSuccess } from "../../utils/Session";

const Login = () => {
  let history = useHistory();

  function onFinish(values) {
    const { username, password } = values;
    if (username === "admin" && password === "admin") {
      authenticateSuccess("admin");
      history.push("/");
    }
  }

  return (
    <div style={styles.backgroundBox}>
      <Form
        style={styles.loginForm}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Avatar size={80} icon={<AntDesignOutlined />} />
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

          <Link
            className="login-form-forgot"
            to="/index"
            style={{ float: "right" }}
          >
            Forgot password
          </Link>
        </Form.Item>

        <Form.Item>
          <Button style={styles.loginButton} type="primary" htmlType="submit">
            Log in
          </Button>
          Or <Link to="/index123">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

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
    backgroundColor: "rgba(255,255,255,0.7)",
    minWidth: "300px",
    padding: 20,
  },
  loginButton: {
    width: "100%",
  },
};

export default Login;
