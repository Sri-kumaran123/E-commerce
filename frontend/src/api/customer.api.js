import api from "./api";

export const addProductCart = async (id) =>{
    try {
        const res = await api.patch(`/customer/add-product-cart/${id}`);
        return res;

    } catch (err) {
        return Promise.reject(err.message);
    }
}

export const removeProductFromCart = async (id) => {
    try {
        const res = await api.delete(`/customer/remove-product-cart/${id}`);
        return res;

    } catch (err) {
        return Promise.reject(err.message);
    }
}

export const getProductfromCart = async () =>{
    try {
        const res = await api.get('/customer/get-cart');
        return res;
    } catch (err){
        return Promise.reject(err);
    }
}

export const getCustomerInfo = async () =>{
    try {
        const res = await api.get('/customer/get-user-info');
        return res
    } catch (err) {
        return Promise.reject(err);
    }
}

export const addPhonecustomer = async (phone) =>{
    try {
        const res = await api.post('/customer/add-phone',{phone});
        return res
    } catch (err) {
        return Promise.reject(err);
    }
}