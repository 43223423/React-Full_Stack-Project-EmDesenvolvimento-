import Container from '../layout/Container'
import styles from './UploadFile.module.css'

function UploadFile({type, text, placeholder, value, onChange}){
    return(
        <div className={styles.UploadContainer}>
           
                <input value={value} type={type} onChange={onChange} text={text} placeholder={placeholder}></input>
        </div>
    )
}
export default UploadFile