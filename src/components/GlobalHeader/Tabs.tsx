import React, { useEffect, useState } from 'react';
import { useAliveController } from 'react-activation';
import { Tabs } from 'antd';
import { useHistory, useLocation } from 'react-router';

const { TabPane } = Tabs;

export default function KeepingTabs() {
  const history = useHistory();
  const { pathname } = useLocation();
  const [activeKey, setKey] = useState('');
  const { getCachingNodes, dropScope } = useAliveController();
  const cachingNodes = getCachingNodes();

  const remove = (name: string) => {
    const currentName = name;
    if (pathname === currentName) {
      dropScope(currentName);
      // 前往排除当前 node 后的最后一个 tab
      const path = cachingNodes.filter(node => node.name !== currentName)[0].name || '/';
      history.push(path);
    } else {
      dropScope(currentName);
    }
  };
  const onChange = (key: any) => {
    // 当点击的是active状态时的tab时返回
    if (key === activeKey) return;
    // 切换 tab页
    history.push(key);
    setKey(key);
  };

  const onEdit = (targetKey: any, action: string) => {
    if (action === 'remove') {
      remove(targetKey);
    }
  };

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <>
      <Tabs
        className="site-layout-tab"
        activeKey={activeKey}
        onChange={onChange}
        tabBarStyle={{ background: '#fff' }}
        tabPosition="top"
        hideAdd
        type="editable-card"
        onEdit={onEdit}
      >
        {cachingNodes.map((node, index) => {
          const { name, title } = node;
          return <TabPane key={name} tab={title} closable={index !== 0} forceRender />;
        })}
      </Tabs>
    </>
  );
}
