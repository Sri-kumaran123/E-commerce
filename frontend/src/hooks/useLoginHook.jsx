import { useState, useEffect } from 'react';
import { loginAuth, getloginUser, signupUser } from '../api/auth.api';
import { useNavigate } from 'react-router-dom';

export default function useLoginHook(){
    const navigate = useNavigate();
    const [render,setrender] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const checkUser = async () => {
            try {
              const res = await getloginUser();
              if (res.data.auth) {
                navigate('/');
              }
            } catch (err) {
              console.error('Auth check failed:', err);
            }
          };
          checkUser();
    },[render]);

    const hookFunction = (data) =>{
        setLoading(true);
        loginAuth(data)
        .then(_=>{setrender(prev=>!prev)})
        .then(_=>setLoading(false))
        .catch(_=>setLoading(false))
    }

    const hookFunctionSignup = (data) =>{
        setLoading(true);
        signupUser(data)
        .then(_=>{setrender(prev=>!prev)})
        .then(_=>setLoading(false))
        .catch(_=>setLoading(false))
    }

    return {loading, hookFunction, hookFunctionSignup};
}