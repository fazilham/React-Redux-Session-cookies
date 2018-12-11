import axios from 'axios';
import { SERVER_API_URL } from 'app/config/constants';
let instance;

export class HttpAxios {
  constructor() {
    instance = axios.create({
      baseURL: SERVER_API_URL
    });
  }
  get(apiEndPoint, data, callback) {
    this.checkDomainExists(apiEndPoint);
    instance
      .get(apiEndPoint, { params: data })
      .then(response => callback(response))
      .catch(error => callback(error));
  }
  post(apiEndPoint, data, callback) {
    this.checkDomainExists(apiEndPoint);
    instance
      .post(apiEndPoint, { params: data })
      .then(response => callback(response))
      .catch(error => callback(error));
  }
  put(apiEndPoint, data, callback) {
    this.checkDomainExists(apiEndPoint);
    instance
      .put(apiEndPoint, { params: data })
      .then(response => callback(response))
      .catch(error => callback(error));
  }
  delete(apiEndPoint, data, callback) {
    this.checkDomainExists(apiEndPoint);
    instance
      .delete(apiEndPoint, { params: data })
      .then(response => callback(response))
      .catch(error => callback(error));
  }
  checkDomainExists(apiEndPoint) {
    /*console.log('before = ' + apiEndPoint);*/
    if (/(http(s?):\/\/|www\.)\S+/i.test(apiEndPoint)) {
      instance.defaults.baseURL = '';
    }
    /*console.log('after = ' + instance.defaults.baseURL);*/
  }
}
export default HttpAxios;

/* Exmaple of using this HTTPService

import HttpAxios from './../utils/http_axios';

const httpAxios = new HttpAxios();
const params = { page: 3 };
httpAxios.get('api/users', params, (res: any) => {
  console.log(res);
});
*/
