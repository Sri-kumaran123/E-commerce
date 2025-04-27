import api from "./api";

export const createOrder = async () =>{
    try {
        const res = await api.post('/order/create-order');
        return res
    } catch (err) {
        return Promise.reject(err);
    }
}