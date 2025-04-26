import { NavLink } from "react-router-dom";
import styles from "./styles/Sidebar.module.css";

export default function Sidebar({role}){
    const CUSTOMER=[
        {dis:"Profile" , path:'/'},
    ];

    const SUPPLIER = [
        {dis:"Profile", path:'/'},
        {dis:"Add Product", path:'/add product'},
        {dis:"view Order", path:'/view order'}
    ]
    console.log(role)
    const list =() =>{
        switch(role) {
            case "seller":
                return <>
                    {
                        SUPPLIER.map(x=><li key={x.dis}><NavLink to={x.path}>
                            {x.dis}
                        </NavLink></li>)
                    }
                </>

        }
    }

    return <div>
        <ol>
            {list()}
            <li>
                {"logout"}
            </li>
        </ol>
    </div>
}