import React from 'react';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  // iconfont地址
  scriptUrl: '//at.alicdn.com/t/font_1730326_gmh3bf64lsq.js',
});

interface Iprops {
  type: string;
  [key: string]: any;
}

export default (props: Iprops) => {
  const { type, ...others } = props;
  return <IconFont type={type} {...others} />;
};
