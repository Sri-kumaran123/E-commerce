
import api from "./api";


export const loginAuth = async (data) => {
    try{
        const res = await api.post('/v1/auth/login', data);
        return res;

    } catch (err) {
        console.log(err.message);
        return Promise.reject(err.message);
    }
}

export const signupUser = async (data) =>{
    try{
        const res = await api.post('/v1/auth/signup', data);
        return res;

    } catch (err) {
        console.log(err.message);
        return Promise.reject(err.message);
    }
}

export const getAccessToken = async () => { 
    try {
        const res = await api.get('/v1/auth/access-token');
        return res;

    } catch (err) {
        console.log(err.message);
        return Promise.reject(err.message);
    }
}

export const logoutUser = async () =>{
    try{
        const res = await api.get('/v1/auth/logout');
        return res;
    } catch (err) {
        console.log(err.message);
        return Promise.reject(err.message);
    }
}

// export const getloginUser = async () => {
//     try {
//         const res = await api.get('/user/');
//         return res;
//     } catch (err) {
//         console.log(err.message);
//         return Promise.reject(err.message);
//     }
// }