import axios from './axios'

type Response = {
  code?: number
  data?: any
  msg?: string
}

const get = (url: string, params?: object ) => {
  return new Promise<Response>((resolve, reject) => {
    axios(url, { params, method: 'GET' }).then((res: Response) => {
      if (res && res.code === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
};

const post = (url: string, data: object = {}) => {
  return new Promise<Response>((resolve, reject) => {
    axios(url, { data, method: 'POST' }).then((res: Response) => {
      if (res && res.code === 200) {
        resolve(res);
      } else {
        reject(res);
      }
    });
  });
};

export {
	post, get
}