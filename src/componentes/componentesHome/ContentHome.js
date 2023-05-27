import styles from './ContentHome.module.css'

function ContentHome(props){
    return(
        <div className={`${styles.container} ${styles[props.display]} `}>
            {props.children}
        </div>
    )
}
export default ContentHome