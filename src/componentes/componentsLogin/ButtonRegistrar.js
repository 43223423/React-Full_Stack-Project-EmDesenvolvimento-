
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './ButtonRegistrar.module.css'

function ButtonRegistrar(){
    return(
        <div>
            <Link to='/registrar'>
            <button className={styles.btn}><h2>Registrar</h2></button>
            </Link>
        </div>
    )
}
export default ButtonRegistrar