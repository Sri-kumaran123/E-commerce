import api from './api';

export const getSellerInfo = async () =>{
    try {
        const res = await api.get('/seller/seller-info');
        return res;

    } catch (err) {
        return Promise.reject(err.mesage);
    }
}

export const addPhoneSeller = async (id, phone) =>{
    try {
        const res = await api.patch(`/seller/add-phone/${id}`,{phone});
        return res;

    } catch (err) {
        return Promise.reject(err.mesage);
    }
}