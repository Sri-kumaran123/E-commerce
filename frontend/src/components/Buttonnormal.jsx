import styles from "./styles/Buttonnormal.module.css";
export default function Buttonnormal({ text, type, loading}){
    return <button
        className={styles.btn}
        type={type}
    >
        {
            loading?<div className={styles.loader}></div>:text
        }
        
    </button>
}