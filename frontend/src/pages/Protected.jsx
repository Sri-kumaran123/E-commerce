import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import { useNavigate } from "react-router-dom";
import { getloginUser } from "../api/auth.api";
export default function Protected(){
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    useEffect(()=>{
            const checkUser = async () => {
                try {
                  const res = await getloginUser();
                  if (!res.data.auth) {
                    navigate('/');
                  } else {
                    console.log(res.data)
                    setUser(res.data?.user)
                  }
                } catch (err) {
                  console.error('Auth check failed:', err);
                }
              };
              checkUser();
        },[]);
    return <div className="layout">
        {/* {console.log(user.role)} */}
        <div>
            <Sidebar role={user?.role}/>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}