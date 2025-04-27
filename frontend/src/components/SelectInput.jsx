import styles from "./styles/SelectInput.module.css";

export default function SelectInput({labeltext, selectvalue, handlechange, value}){
    return <div className={styles.inputbox}>
          <label>{labeltext}</label>
          <select
          value={value}
          onChange={(e)=>{handlechange(e)}}
          name={labeltext}
          >
            
            {selectvalue.map(x=>{
                return <option value={x.value}>{x.dis}</option>
            })}
          </select>
        </div>
}