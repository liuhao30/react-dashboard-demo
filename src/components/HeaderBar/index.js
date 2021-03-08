import React from "react";
import { Badge } from "antd";
import screenfull from "screenfull";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./style.css";

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreen: false,
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

  render() {
    const { collapsed } = this.props;
    const { isFullScreen } = this.state;
    return (
      <div>
        <div style={{ fontSize: 23, float: "left" }} onClick={this.toggle}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <div style={{ float: "right" }}>
          <ul className="header-ul">
            <li onClick={this.screenfullToggle}>
              {isFullScreen ? <ShrinkOutlined /> : <ArrowsAltOutlined />}
            </li>
            <li>
              <Badge count={1000} overflowCount={999}>
                <NotificationOutlined />
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
