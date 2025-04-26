import styles from'./styles/Taghead.module.css';

export default function Taghead({text1, text2, func}){

    return <div className='py'>
        <div className={styles.container}>
        <div className={styles.leftcontainer}>
            <p>
                {text1} &nbsp;
                <span>
                    {text2}
                </span>
            </p>
        </div>
        <p onClick={func} className={styles.rightcontainer}>
            View all
            <span>
                
            </span>
        </p>
        </div>
    </div>

}