import React from 'react'
import { Spin } from 'antd'

export default () => {
  return (
    <div style={{
      paddingTop: 100,
      textAlign: 'center'
    }}>
      <Spin size="large" spinning={true} tip="加载中" />
    </div>
  )
}