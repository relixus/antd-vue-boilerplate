import axios from "axios";
import {showNotificationError} from './interceptor_feedback.js'

var http = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      "Content-type": "application/json"
    }
  });

  http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    showNotificationError(error)
    return Promise.reject(error);
  });

export default http;