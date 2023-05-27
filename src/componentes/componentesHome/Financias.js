import {FaMoneyBillWave} from 'react-icons/fa'
import {TbMoneybag, } from 'react-icons/tb'
import {GrMoney} from 'react-icons/gr'
import {GiPayMoney, } from 'react-icons/gi'
import {MdAttachMoney} from 'react-icons/md'


import Container from '../layout/Container'
import ContentHome from './ContentHome'
import styles from './Financias.module.css'
import ButtonFinancias from './SectionsHome/ButtonFinancias'

function Financias(){
    return(
        <div className={styles.FinanciasContainer}>
            
            <Container>
                <div className={styles.SubFinancias}>
                    <h1>Faça seu dinheiro render <br/>
                    <span>No FasteBank tem investimento com rentabilidade e segurança que combina com você!</span>
                    </h1>
                <div className={styles.Buttons}>
                    <div className={styles.FinanciasItem}><TbMoneybag color='green' size='50'/><ButtonFinancias placeholder='Saiba mais'/><span>Investimento CDB</span></div>
                    <div className={styles.FinanciasItem}><FaMoneyBillWave color='green' size='50'/><ButtonFinancias placeholder='Saiba mais'/><span>Rendimento CDI</span></div>
                    <div className={styles.FinanciasItem}><GiPayMoney color='green' size='50'/><ButtonFinancias placeholder='Saiba mais'/><span>Compra de Cpitomoedas</span></div>
                    <div className={styles.FinanciasItem}><MdAttachMoney color='green' size='50'/><ButtonFinancias placeholder='Saiba mais'/><span>Investimentos no Clube</span></div>
                    </div>
                 </div>
            </Container>
        </div>
    )
}
export default Financias