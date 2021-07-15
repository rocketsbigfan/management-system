import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Redirect } from 'react-router';

export default () => {
  const token = window.localStorage.getItem('token');

  if (token) {
    return <Redirect to='/' />;
  }

  const handleFinish = () => {
    console.log(true);
  };

  return (
    <Card title="欢迎光临">
      <Form onFinish={handleFinish}>
        <Form.Item label="账户">
          <Input />
        </Form.Item>
        <Form.Item label="密码">
          <Input.Password
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <Form.Item>
         <Button style={{ width: '100%' }} type="primary" htmlType="submit">登陆</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
