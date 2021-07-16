/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState, useMemo, useEffect } from 'react';
import { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useMount from '@/hooks/useMount';
import IconFont from '../IconFont';
import styles from './index.module.less';

type SideMenuProps = {
  menu: MenuItem[];
  collapsed: boolean;
} & MenuProps;

type MenuItem = {
  title?: string;
  icon?: string;
  children?: MenuItem[];
  path?: string;
  hideInMenu?: boolean;
};

const getIcon = (icon?: string) => {
  if (icon) {
    return <IconFont type={icon} className={styles.icon} />;
  }
  return '';
};

const { SubMenu, Item } = Menu;
export default (props: SideMenuProps) => {
  const { menu, theme, mode, collapsed } = props;
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState<any[]>([]);

  useMount(() => {
    const list = pathname.split('/').splice(1);
    const keys = list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
    setOpenKeys(keys);
  });

  useEffect(() => {
    if (!collapsed) {
      const list = pathname.split('/').splice(1);
      const keys = list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
      setOpenKeys(keys);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  const selectedKeys = useMemo(() => {
    const list = pathname.split('/').splice(1);
    const keys = list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);

    return [keys[keys.length - 1]];
  }, [pathname]);

  // 整理MenuItem或者SubMenu
  const getSubMenuOrItem = (item: MenuItem) => {
    const { path, title, children } = item;

    if (children && children.length) {
      return (
        <SubMenu
          key={path}
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{title}</span>
              </span>
            ) : (
              title
            )
          }
        >
          {getNavMenuItems(children)}
        </SubMenu>
      );
    }

    if (!item.hideInMenu) {
      const icon = getIcon(item.icon);
      return (
        <Item key={path}>
          <Link to={path as string} replace={path === pathname}>
            {icon}
            <span>{title}</span>
          </Link>
        </Item>
      );
    }

    return '';
  };

  const getNavMenuItems = (menusData?: MenuItem[]) => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => item.path && !item.hideInMenu)
      .map(item => getSubMenuOrItem(item))
      .filter(item => item);
  };

  const onOpenChange = (keys: React.ReactText[]) => {
    setOpenKeys(keys);
  };

  return (
    <Menu
      mode={mode}
      theme={theme}
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
    >
      {getNavMenuItems(menu)}
    </Menu>
  );
};
