import React from 'react'
import styles from './index.module.less'
import { Avatar, Menu, Dropdown } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';


export default () => {

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={undefined}>
      <Menu.Item key="center">
        <UserOutlined />
        用户中心
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menuHeaderDropdown} placement="bottomLeft">
        <Avatar size="small" icon={<UserOutlined />} />
      </Dropdown>
    </div>
  )
}

