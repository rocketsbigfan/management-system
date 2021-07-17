import React from 'react';
import styles from './index.module.less';
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router';
import { removeToken } from '@/utils/utils';
import { useAliveController } from 'react-activation';

const menus = {
  center: {
    title: '用户中心',
    icon: <UserOutlined />,
  },
  logout: {
    title: '退出登录',
    icon: <LogoutOutlined />,
  },
};

const AvatarDropDown = () => {
  const history = useHistory();
  const { clear } = useAliveController();
  const onClick = ({ key }: any) => {
    if (key === 'logout') {
      // 清除token
      removeToken();
      // 清除缓存
      clear();
      history.push('/user/login');
    }
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onClick}>
      {Object.keys(menus).map(key => {
        const { icon, title } = menus[key];
        return (
          <Menu.Item key={key}>
            {icon}
            {title}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menuHeaderDropdown} placement="bottomLeft">
        <Avatar size="small" icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
};

export default AvatarDropDown;
