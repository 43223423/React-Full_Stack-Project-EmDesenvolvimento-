import styles from './BotoesPriMoney.module.css'



import {MdOutlineWallet} from 'react-icons/md'
//carteira

import {MdPersonOutline} from 'react-icons/md'
//pagar pessoas

import {FaMoneyCheck} from 'react-icons/fa'
//exttrato
import {FaMoneyBillAlt} from 'react-icons/fa'
//boleto


import {FaHandHoldingUsd} from 'react-icons/fa'
//emprestimo

import {FaStore} from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
//  store

function OpcoesPriMoney(){
    return(
        <div className={styles.OpcoesPriMoney_container}>
          
            <BotoesPriMoney><FaStore color='green' size='30'/></BotoesPriMoney> 
           
        </div>

    )
}
export default OpcoesPriMoney

function BotoesPriMoney({text, nome }){
    return(
        <div className={styles.BotoesPriMoney_container}>
            <Link to='/extrato'>
            <button><FaMoneyCheck color='green' size='50'/><label htmlFor={nome}><br/>Extrato</label></button>
            </Link>
            <button><MdOutlineWallet color='green' size='50'/><label htmlFor={nome}><br/>Sua carteira</label></button>
            
            <Link to='/codigo'>
            <button><FaMoneyBillAlt color='green' size='50'/><label htmlFor={nome}><br/>Pagar boleto</label></button>
             </Link>
           
            <button><MdPersonOutline color='green' size='50'/><label htmlFor={nome}><br/>Pagar pessoas</label></button>
           <Link to='/emprestimo'>
            <button><FaHandHoldingUsd color='green' size='50'/><label htmlFor={nome}><br/>Empréstimo</label></button>
            </Link>
            <button><FaStore color='green' size='50'/><label htmlFor={nome}><br/>Store</label></button>
            
        </div>
    )
}