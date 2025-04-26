import styles from "./styles/SelectInput.module.css";

export default function SelectInput({labeltext, selectvalue, handlechange}){
    return <div className={styles.inputbox}>
          <label>{labeltext}</label>
          <select
          onChange={(e)=>{handlechange(e)}}
          >
            <option value={null}>--Select one--</option>
            {selectvalue.map(x=>{
                return <option value={x.value}>{x.dis}</option>
            })}
          </select>
        </div>
}