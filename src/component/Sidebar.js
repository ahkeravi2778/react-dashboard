import React , {Component} from 'react';
import { Layout, Menu } from 'antd';
import {

  BarChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top : 61
      }}
    >
     
      <Menu theme="dark" mode="inline" >
        <Menu.Item key="1" icon={<UserOutlined />}>
         <Link to='/'> Dashboard</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="31"><Link to='/user'> List</Link></Menu.Item>
              <Menu.Item key="32"><Link to='/newuser'> Add</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Blog">
              <Menu.Item key="41"><Link to='/blog'>Blog List</Link></Menu.Item>
              <Menu.Item key="42"><Link to='/new'> New Blog</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<UserOutlined />} title="Product">
              <Menu.Item key="51"><Link to='/product'>Product List</Link></Menu.Item>
              <Menu.Item key="52"><Link to='/productnew'> New Product</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
        <Link to='/contact'> Contact</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    );
  }
}

export default Sidebar;