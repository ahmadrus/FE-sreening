import axios, { AxiosError, AxiosRequestConfig } from 'axios';

function filtered(obj: any) {
  for (const propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ''
    ) {
      delete obj[propName];
    }
  }
  return obj;
}

export const fetcher = async (
  url: string,
  config?: AxiosRequestConfig,
  isAuth?: boolean
) => {
  const requestConfig: object = {
    ...config,
    ...(config?.params ? { params: filtered(config.params) } : {}),
    url,
    headers: {
      ...(isAuth ? { Authorization: localStorage.getItem('session') } : {}),
      'Content-Type': 'application/json',
    },
  };

  try {
    const { data } = await axios.request(requestConfig);
    return data;
  } catch (error) {
    throw (error as AxiosError).response;
  }
};
