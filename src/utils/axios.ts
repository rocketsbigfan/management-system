import axios from 'axios';

const service = axios.create({
  // baseURL: 'http://localhost:3364',
  // 配置请求超时时间
  timeout: 10000,
  // 如果用的JSONP，可以配置此参数带上cookie凭证，如果是代理和CORS不用设置
  // withCredentials: true
});
// 请求拦截
service.interceptors.request.use(config => {
  // 自定义header，可添加项目token
  // eslint-disable-next-line no-param-reassign
  config.headers.token = 'token';
  return config;
});
// 返回拦截
service.interceptors.response.use(
  response => {
    // 获取接口返回结果
    const res = response.data;
    // code为0，直接把结果返回回去，这样前端代码就不用在获取一次data.
    if (res.code === 200) {
      return res;
    }
    // 错误处理
    console.log(res);
    return res;
  },
  e => {
    console.log(e);
  },
);

export default service;
