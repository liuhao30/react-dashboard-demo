import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Badge, Avatar } from "antd";
import screenfull from "screenfull";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./style.css";
import image from "../../assets/img/avatar.jpg";

const onClick = ({ key }) => {
  console.log(`Click on item ${key}`);
};

const menu = (
  <Menu className="test-menu" onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

function HeaderBar(props) {
  const [isFullScreen, changeFullScreen] = useState(false);
  const [count, setCount] = useState(1000);
  const { onToggle, collapsed } = props;

  useEffect(() => {
    screenfull.onchange(() => {
      changeFullScreen(screenfull.isFullscreen);
    });
    return screenfull.off("change");
  });

  return (
    <div>
      <div
        style={{ fontSize: 23, float: "left" }}
        onClick={() => {
          onToggle();
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div style={{ float: "right" }}>
        <ul className="header-ul">
          <li
            onClick={() => {
              screenfull.toggle();
            }}
          >
            {isFullScreen ? (
              <ShrinkOutlined style={{ fontSize: 20 }} />
            ) : (
              <ArrowsAltOutlined style={{ fontSize: 20 }} />
            )}
          </li>
          <li>
            <Badge
              count={count}
              overflowCount={999}
              onClick={() => {
                setCount(count - 1);
              }}
            >
              <NotificationOutlined style={{ fontSize: 20 }} />
            </Badge>
          </li>
          <li>
            <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Avatar src={image} /> <DownOutlined />
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderBar;
