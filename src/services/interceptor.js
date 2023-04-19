import axios from "axios";

export  const interceptor = () => {
    axios.interceptors.request.use(function(config) {
        // Do something before request is sent
        const {origin} = new URL(config.url);
        const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
        const token = localStorage.getItem('access_token');
        if(allowedOrigins.includes(origin))
        {
            config.headers.authorization = 'Bearer ' + token;
        }
        return config;
    },
    
     function (error) {
        // Do something with request error
        return Promise.reject(error)
     });
}
