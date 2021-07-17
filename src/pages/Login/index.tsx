import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Redirect, useHistory } from 'react-router';
import { setToken, getToken } from '@/utils/utils';

export default () => {
  const token = getToken();
  const { push } = useHistory();

  if (token) {
    return <Redirect to="/" />;
  }

  const handleFinish = (value: any) => {
    setToken(JSON.stringify(value));
    push('/first/welcome');
  };

  return (
    <Card title="欢迎光临">
      <Form onFinish={handleFinish}>
        <Form.Item name="username" label="账户">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Form.Item>
        <Form.Item>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
