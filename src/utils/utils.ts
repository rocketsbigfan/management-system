const TOKEN = 'token';
/**
 *
 * @param value token值
 * @description 设置token
 */
export const setToken = (value: string) => {
  return localStorage.setItem(TOKEN, value);
};
/**
 * @description 获取token
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN);
};
/**
 * @description 删除token
 */
export const removeToken = () => {
  return localStorage.setItem(TOKEN, '');
};
