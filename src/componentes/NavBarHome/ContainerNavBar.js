import styles from './ContainerNavBar.module.css'

function ContanerNavBar(props){
    return(
        <div className={`${styles.container}`}>
        {props.children}
    </div>
    )
}
export default ContanerNavBar