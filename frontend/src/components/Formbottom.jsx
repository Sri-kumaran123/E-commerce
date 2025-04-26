import { NavLink } from "react-router-dom";
import styles from "./styles/Formbottom.module.css";

export default function Formbottom({text, textto, path}){

    return <div className={styles.wrap}>
        <span>
            {text} &nbsp;
        </span>
        <span className={styles.link}>
            <NavLink to={path}>
                {textto}
            </NavLink>
        </span>
    </div>
}