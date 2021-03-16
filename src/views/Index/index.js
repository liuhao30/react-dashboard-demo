import React, { useState } from "react";
import { Layout } from "antd";
import "./style.css";
import ContentMain from "../../components/ContentMain";
import HeaderBar from "../../components/HeaderBar";
import SideNavBar from "../../components/SideNavBar";
const { Header, Sider, Content, Footer } = Layout;

function Index() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider collapsible trigger={null} collapsed={collapsed}>
        <SideNavBar />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ background: "#fff", padding: "0 16px" }}>
          <HeaderBar
            collapsed={collapsed}
            onToggle={() => {
              setCollapsed(!collapsed);
            }}
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

export default Index;
