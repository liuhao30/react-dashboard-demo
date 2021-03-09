import React from "react";
import { Layout } from "antd";
import "./style.css";
import ContentMain from "../../components/ContentMain";
import HeaderBar from "../../components/HeaderBar";
import SideNavBar from "../../components/SideNavBar"
const { Header, Sider, Content, Footer } = Layout;

class Index extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider collapsible trigger={null} collapsed={this.state.collapsed}>
          <SideNavBar/>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ background: "#fff", padding: "0 16px" }}>
            <HeaderBar
              collapsed={this.state.collapsed}
              onToggle={this.toggle}
            />
          </Header>
          <Content
            style={{
              minHeight: 280,
            }}
          >
            <ContentMain />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            React Dashboard Demo ©2021 Created by liuhao30@126.com
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
