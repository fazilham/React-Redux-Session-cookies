import axios from 'axios';
import { Storage } from 'app/shared/util/utils';
import { SERVER_API_URL } from 'app/config/constants';

const TIMEOUT = 1000000; // 10000
const setupAxiosMiddle = onUnauthenticated => {
  const onRequestSuccess = config => {
    config.timeout = TIMEOUT;
    if (SERVER_API_URL !== undefined) {
      config.url = `${SERVER_API_URL}${config.url}`;
    }
    return config;
  };
  const onResponseSuccess = response => response;
  const onResponseError = err => {
    const status = err.status || err.response.status;
    if (status === 403 || status === 401) {
      onUnauthenticated();
    }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosMiddle;
