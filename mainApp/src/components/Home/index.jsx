import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => {
    if (index === 0) {
    return {
        key: String(index + 1),
        icon: React.createElement(icon),
        label: <Link to="/react-app/form">react-app-form</Link>,
    }
  } else if (index === 1) {
    return {
        key: String(index + 1),
        icon: React.createElement(icon),
        label: <Link to="/vue-app">vue-app</Link>,
    }
  } else  if (index === 2) {
    return {
        key: String(index + 1),
        icon: React.createElement(icon),
        label: <Link to="/react-app/table">react-app-table</Link>,
    }
  } else {
      return {
          key: String(index + 1),
          icon: React.createElement(icon),
          label: <Link to="/">`nav ${index + 1}`</Link>,
      }
  }
});


const Home = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onClick = (e) => {
    console.log(e)
  }

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            color: '#fff'
          }}
        >微前端demo</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} onClick={onClick} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;