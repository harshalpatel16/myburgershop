import axios from 'axios';

const instance = axios.create({
    baseURL:'https://my-burger-shop-32c2d.firebaseio.com/'
});

export default instance;