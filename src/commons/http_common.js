import axios from "axios";

var http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
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
    console.log(error.response.status);
    if(error.response.status == 400){
        
    }

    if(error.response.status == 500){
      
    }
    return Promise.reject(error);
  });

export default http;