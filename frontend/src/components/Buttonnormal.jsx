import styles from "./styles/Buttonnormal.module.css";
export default function Buttonnormal({handlsubmit, text, type}){
    return <button
        onSubmit={handlsubmit}
        className={styles.btn}
        type={type}
    >
        {text}
    </button>
}