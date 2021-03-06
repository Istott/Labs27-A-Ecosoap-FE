import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

const { Header } = Layout;

export default function TopHeader() {
  const { authService, authState } = useOktaAuth();

  function logout(event) {
    authService.logout();
  }

  return (
    <Header>
      {authState.isAuthenticated && (
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="0">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/new-order">New Order</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/profile">My Profile</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <a href="/#" onClick={logout}>
              Logout
            </a>
          </Menu.Item>
        </Menu>
      )}
    </Header>
  );
}
