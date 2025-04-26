import { useEffect, useState } from "react";
import { getSellerInfo } from "../api/seller.api";
import { useUser } from "../contextapi/UserContext";


export default function userInfoHook(){
    const [userInfo, setUserInfo] = useState({});
     const {user} = useUser();
     console.log(user)
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
            }
        }

        getinfo();
    },[user]);

    return userInfo;


}