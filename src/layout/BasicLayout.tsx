import React, { useState, Suspense } from 'react'
import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import styles from './BasicLayout.module.less'
import GlobalHeader from '@/components/GlobalHeader/RightContent';
import PageLoading from '@/components/PageLoading';

const BaseMenu = React.lazy(() => import('@/components/SideMenu'));

const { Header, Sider, Content } = Layout;

const menusData = [
  {
    title: '第一',
    path: '/first',
    children: [
      {
        path: '/first/welcome',
        title: '欢迎'
      },
      {
        path: '/first/table',
        title: '表格'
      },
      {
        path: '/first/todo',
        title: '表单'
      },
    ]
  },
  {
    title: '第二',
    path: '/second',
    children: [
      {
        path: '/second/com1',
        title: '测试1'
      },
      {
        path: '/second/com2',
        title: '测试2'
      },
    ]
  },
]

const BasicLayout = (props: any) => {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)
  const handleToggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout className={styles['basic-layout']}>
      {/* 左侧菜单 */}
      <Sider  
        collapsed={collapsed}
        trigger={null} 
        collapsible 
      >
        <Suspense fallback={<PageLoading />}>
          <BaseMenu 
            theme="dark"
            mode="inline"
            menu={menusData} 
            collapsed={collapsed}
          />
        </Suspense>
      </Sider>
      <Layout className={styles["site-layout"]}>
        <Header className={styles["site-layout-background"]} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles["trigger"],
              onClick: handleToggle,
            })
          }
          <GlobalHeader />
        </Header>
        <Content
            className={styles["site-layout-background"]}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
      </Layout>
      
    </Layout>
  )
}

export default BasicLayout