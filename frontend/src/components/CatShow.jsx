import { CATEGORY } from "../assets/constant";
import styles from "./styles/CatShow.module.css";
export default function CatShow(){

    return <div className="py">
        <ul className={styles.horizontal}>
            {
                CATEGORY.map(x=>{
                    return <li
                        key={x.value}

                    >
                        <img 
                            src={x.img}
                            alt={x.value}
                        />
                        <p>{x.value}</p>

                    </li>
                })
            }
        </ul>
    </div>
}