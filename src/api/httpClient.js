import axios from 'axios';
import NProgress from 'nprogress'
import store from './../store/index'

/** Default config for axios instance */
let config = {
    baseURL: 'http://localhost:8000/api/',
    timeout: 60000,
    headers: {
        "Content-Type": "application/json",
        // anything you want to add to the headers
    }
};

/** Creating the instance for axios */
const httpClient = axios.create(config);

/** Auth token interceptors */
const authInterceptor = config => {
    /** TODO: Add auth token */
    let token = store.getters.token;
    config.headers.Authorization = token ? `Bearer ${token}` : null;
    NProgress.start()
    return config;
};

/** logger interceptors */
const loggerInterceptor = config => {
    /** TODO */
    return config;
}

/** Adding the request interceptors */
httpClient.interceptors.request.use(authInterceptor, (error) => {
    // Do something with request error
    return Promise.reject(error);
});
httpClient.interceptors.request.use(loggerInterceptor);

/** Adding the response interceptors */
httpClient.interceptors.response.use(
    response => {
        /** TODO: Add any response interceptors */
        NProgress.done()
        return response;
    },
    error => {
        /** TODO: Do something with response error */
        NProgress.done()
        return Promise.reject(error);
    }
);
export default httpClient;