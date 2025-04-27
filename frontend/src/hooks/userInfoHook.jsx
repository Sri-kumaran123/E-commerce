import { useEffect, useState } from "react";
import { getSellerInfo, addPhoneSeller } from "../api/seller.api";
import { useUser } from "../contextapi/UserContext";
import { addPhonecustomer, getCustomerInfo } from "../api/customer.api";


export default function userInfoHook(){
    const [userInfo, setUserInfo] = useState({});
    const [render, setRender] = useState(false);
     const {user} = useUser();
     console.log(userInfo)
    useEffect(()=>{
        const getinfo = () =>{
            console.log(user.role)
            switch(user.role){
                case 'seller':
                    getSellerInfo()
                    .then(res=>{
                        setUserInfo(res.data);
                        console.log(userInfo)
                    });
                    break;
                case 'delivery':
                    break;
                default:
                    getCustomerInfo()
                    .then(res=>{
                        setUserInfo(res.data);
                        console.log(userInfo)
                    })
            }
        }

        getinfo();
    },[user, render]);

    const addPhone = (id, phone, data) => {
        switch (user.role) {
            case 'seller':
                addPhoneSeller(id,phone)
                .then(res=>{setRender(prev=>!prev)})
                break;
            default:
                addPhonecustomer(phone)
                .then(res=>{setRender(prev=>!prev)})
        }
    }

    return [userInfo,addPhone];


}