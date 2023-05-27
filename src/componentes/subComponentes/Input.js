import styles from './Input.module.css'

function Input({type, nome, value, placeholder, text, onChange}){
    return(
        <div className={styles.form}>
            <label htmlFor={nome}>{text}:</label>
            <input
            type={type}
            id={nome}
            name={nome}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}
export default Input