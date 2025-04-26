import styles from './styles/Navbar.module.css';
import { COMPANY_NAME } from '../assets/constant';

import { UserRound, ShoppingCart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getloginUser } from '../api/auth.api';
export default function Navbar(){
    const [isAuth, setIsAuth] = useState(false);
    useEffect(()=>{
        const checkUser = async () => {
                    try {
                      const res = await getloginUser();
                      setIsAuth(res.data.auth);
                    } catch (err) {
                      console.error('Auth check failed:', err);
                    }
                  };
                  checkUser();
    },[]);

    const group = (icon, text, normal) => <span className={styles.group}>
        <span className={styles.icon}>{icon}</span>
        {
            normal?
            <NavLink to={`/${text}`}>
            <p className={styles.icontext}>{text}</p>
            </NavLink> :
            <NavLink to={isAuth?"profile":"/login"}>
            <p className={styles.icontext}>{isAuth?"profile":text}</p>
            </NavLink> 
        }
    </span>

    return <nav className='py'>
        <h1>
            {COMPANY_NAME}
        </h1>

        <div className={styles.groups}>
            {/* text value */}
            {group(<UserRound/>, "signin/signup")} 
            {group(<ShoppingCart /> , "Cart", true)}
        </div>

    </nav>
}