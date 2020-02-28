import axios from 'axios';

export default axiosWithAuth = () => {
    const token = window.localStorage.setItem('token');
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000'
    });
};