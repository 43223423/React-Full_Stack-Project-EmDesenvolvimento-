import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './ButtonLogin.module.css'

function Button({text}){
    return(
        <div>
            <Link to='/entrar'>
            <button className={styles.btn}><h2>{text}</h2></button>
            </Link>
        </div>
    )
}
export default Button