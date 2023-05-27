import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './ButtonEntrar.module.css'

function ButttonEntrar({text, onClick, onChange}){
    return(
        <div>
            {/* <Link to='/home'> </Link> */}
                <h2 onClick={onClick} className={styles.btn}>{text}</h2>
           
        </div>
    )
}
export default ButttonEntrar