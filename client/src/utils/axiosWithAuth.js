import axios from 'axios';

export default axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'http://localhost:5000'
    });
};