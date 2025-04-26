import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { useNavigate } from "react-router-dom";
import { getloginUser } from "../api/auth.api";
import { UserProvider } from "../contextapi/UserContext";
export default function Protected(){
    
    return <div className="layout">
        <UserProvider>

        {/* {console.log(user.role)} */}
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="main">
            <Outlet />
        </div>
            
        </UserProvider>
    </div>
}