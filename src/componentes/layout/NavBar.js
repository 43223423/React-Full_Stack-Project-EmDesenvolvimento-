import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'
import Container from "./Container"
import logo from '../../img/logo.jpg'



function NavBar(props){
    return(
        <div className={`${styles.NavBar_container} ${styles[props.value]}`} >
            <Container>
                <Link to='/'>
                    <img src={logo}/>
                </Link>

                <ul className={styles.lista}>
                    <li>Ajuda</li>
                    <li>Contato Empresarial</li>
                </ul>
            </Container>
        </div>
    )
}
export default NavBar