import { NavLink } from "react-router-dom";
import styles from "./styles/Sidebar.module.css";
import { useUser } from "../contextapi/UserContext";

export default function Sidebar({role}){
    const {user} = useUser();
    const CUSTOMER=[
        {dis:"Profile" , path:'/'},
    ];

    const SUPPLIER = [
        {dis:"Profile", path:''},
        {dis:"Add Product", path:'/add product'},
        {dis:"view Order", path:'/view order'}
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

        }
    }

    return <ul className={styles.menu}>
            {list()}
            <li>
                {"logout"}
            </li>
        </ul>
    
}