import { NavLink, useNavigate } from "react-router-dom";
import styles from "./styles/Sidebar.module.css";
import { useUser } from "../contextapi/UserContext";
import { logoutUser } from "../api/auth.api";

export default function Sidebar({role}){
    const navigate = useNavigate();
    const {user} = useUser();
    const CUSTOMER=[
        {dis:"Profile" , path:''},
    ];

    const SUPPLIER = [
        {dis:"Profile", path:''},
        {dis:"Add Product", path:'add-product'},
        {dis:"view Order", path:'view-order'}
    ]
    console.log(user)
    const list =() =>{
        switch(user?.role) {
            case "seller":
                return <>
                    {
                        SUPPLIER.map(x=><NavLink to={x.path}  key={x.dis}><li>
                            {x.dis}
                        </li></NavLink>)
                    }
                </>
            default:
                return <>
                    {
                        CUSTOMER.map(x=><NavLink to={x.path}  key={x.dis}><li>
                            {x.dis}
                        </li></NavLink>)
                    }
                </>

        }
    }

    const logoutFunc=()=>{
        logoutUser()
        .then(_=>{
            navigate('/');
        })
    }

    return <ul className={styles.menu}>
            {list()}
            <li onClick={logoutFunc}>
                {"logout"}
            </li>
        </ul>
    
}