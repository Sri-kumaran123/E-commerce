import styles from './styles/Navbar.module.css';
import { COMPANY_NAME } from '../assets/constant';

import { UserRound, ShoppingCart } from 'lucide-react';
export default function Navbar(){

    const group = (icon, text) => <span className={styles.group}>
        <span className={styles.icon}>{icon}</span>
        <p className={styles.icontext}>{text}</p>
    </span>

    return <nav className='py'>
        <h1>
            {COMPANY_NAME}
        </h1>

        <div className={styles.groups}>
            {/* text value */}
            {group(<UserRound/>, "signin/signup")} 
            {group(<ShoppingCart /> , "Cart")}
        </div>

    </nav>
}