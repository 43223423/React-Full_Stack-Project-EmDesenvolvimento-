import styles from './ListaComponentes.module.css'


function ListaComponentes({name}){
    return(
        <div className={styles.ListaComponentes_container}>
            
            <li>
                <button>
                    <label>{name}</label>
                </button>
            </li>
            
        </div>
    )
}
export default ListaComponentes