import styles from './BottonHome.module.css'
import {FaMoneyBill, FaMoneyCheck, FaPiggyBank } from 'react-icons/fa'


function BottonHome({placeholder, placeholder2,placeholder3 }){
    return(
        <div className={styles.BottonHome_container}>
            <button placeholder={placeholder}><FaMoneyBill color='green' size='30'/><span>Empréstimo Pessoal</span></button>
            <button placeholder={placeholder2}><FaMoneyCheck  color='green' size='30'/><span><br/>Clube de Empréstimo</span></button>
            <button placeholder={placeholder3}><FaPiggyBank  color='green' size='30'/><span>Cartão de Crédito</span></button>
            

        </div>
    )
}
export default BottonHome