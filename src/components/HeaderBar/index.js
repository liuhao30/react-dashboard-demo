import React from "react";
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
import { withRouter } from "react-router-dom";
import "./style.css";
import image from "../../assets/img/avatar.jpg";
import { clearCookie } from "../../utils/Session";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
      count: 1000,
    };
  }

  componentDidMount() {
    screenfull.onchange(() => {
      this.setState({
        isFullScreen: screenfull.isFullscreen,
      });
    });
  }

  componentWillUnmount() {
    screenfull.off("change");
  }

  toggle = () => {
    this.props.onToggle();
  };

  screenfullToggle = () => {
    screenfull.toggle();
  };

  logout = () => {
    clearCookie();
    console.log(this.props.location.pathname);
    this.props.history.push(this.props.location.pathname);
    this.props.history.go();
  };

  decrease = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };
  render() {
    const { collapsed } = this.props;
    const { isFullScreen } = this.state;
    const menu = (
      <Menu className="test-menu">
        <Menu.Item>个人信息</Menu.Item>
        <Menu.Item>
          <span onClick={this.logout}>退出登录</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <div>
        <div style={{ fontSize: 23, float: "left" }} onClick={this.toggle}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div style={{ float: "right" }}>
          <ul className="header-ul">
            <li onClick={this.screenfullToggle}>
              {isFullScreen ? (
                <ShrinkOutlined style={{ fontSize: 20 }} />
              ) : (
                <ArrowsAltOutlined style={{ fontSize: 20 }} />
              )}
            </li>
            <li>
              <Badge
                count={this.state.count}
                overflowCount={999}
                onClick={this.decrease}
              >
                <NotificationOutlined style={{ fontSize: 20 }} />
              </Badge>
            </li>
            <li>
              <Dropdown
                overlay={menu}
                placement="bottomLeft"
                trigger={["click"]}
              >
                <a
                  href="#"
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
}

export default withRouter(HeaderBar);
