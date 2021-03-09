import React from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import "./style.css";

const SideNavBar = () => {
  return (
    <React.Fragment>
      <div className="logo" />

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<PartitionOutlined />}>
          设备管理
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default SideNavBar;
