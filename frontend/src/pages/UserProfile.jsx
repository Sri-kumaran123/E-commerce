import { useState } from "react";
import { useUser } from "../contextapi/UserContext"
import userInfoHook from "../hooks/userInfoHook";

export default function UserProfile(){
    
    const userinfo = userInfoHook();

    console.log(userinfo)

   

    return <div>
        
    </div>
}