import api from './api';

export const getSellerInfo = async () =>{
    try {
        const res = await api.get('/seller/seller-info');
        return res;

    } catch (err) {
        return Promise.reject(err.mesage);
    }
}