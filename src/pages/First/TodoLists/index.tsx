import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { post } from '@/utils/request'

const FormItem = Form.Item

const List = () => {

  	const [form] = Form.useForm();

  	const handlFinish = async (value: any) => {
  		const res = await post('/api/todos/create', value)
  		if(res) {
  			post('/api/todos/list', {
  				current: 1,
  				pageSize: 10
  			})
  		}
  	}

	return (
		<Form form={form} onFinish={handlFinish}>
			<FormItem label="标题" name="title"><Input /></FormItem>
			<FormItem label="内容" name="content"><Input /></FormItem>
			<Button htmlType="submit">提交</Button>
		</Form>
	)

}

export default List