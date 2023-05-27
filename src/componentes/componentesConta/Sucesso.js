import styles from './Sucesso.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import logo from '../../img/logoFull.jpg'
import Container from '../layout/Container'
import React, { useState } from 'react'
import Conta from './Conta'
import axios from 'axios'



function Sucesso(){

    const [finished, setFinishedTimeout] = React.useState(true)
    const [finishedConta, setFinishedConta] = React.useState(false)

    React.useEffect(()=>{
        const id = setTimeout(()=>{
            setFinishedTimeout(false)
            
        },5000)
    
    return () => clearTimeout(id)
}, [])

    React.useEffect(()=>{
        const ide = setTimeout(()=>{
            setFinishedConta(true)
        }, 5000)
   
    return () => clearTimeout(ide)
}, [])
    
    return(
        <>{ finished  &&
        <div className={styles.Sucesso_container}>
           
            <img src={logo}/>
          
            <h1>Conta paga com sucesso!</h1>
            <span>Obrigado por pagar com FasteBank </span>
        </div>
        }
        <>{ finishedConta &&
            <Pronto/>

        }
        </>
        </>
        
    )
}
export default Sucesso

function Pronto(){

    const [saldo_atu, setSaldo_atu] = useState()

    const token = localStorage.getItem('token')
    const id_banco = sessionStorage.getItem('codigo_banco')

    axios.get(`http://127.0.0.1:8000/ContaBancaria/${id_banco}/`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    }).then(respo => {
        const data = respo.data
        const saldo_atual = data.saldoBancario
        setSaldo_atu(saldo_atual)
    })

    return(
        <div className={styles.Pronto_container}>
            <div>
                <h1>Pagamento finalizado</h1>
            </div>
            <div>
                <h4>Conta paga com o valor de :<br/></h4>
                 <p> R$ 999,99</p>
                <hr/>
            </div>
            <div className={styles.subContainer}>
                <h3>Saldo atual: <span>R$ {saldo_atu},00</span></h3>
            </div>
            <Link to='/home'>
            <ButtonSucesso text='Voltar ao Menu'/>
            </Link>

            <div className={styles.Pagar_again}>
            <Link to='/codigo'>
                <h2>Pagar outra conta</h2>
            </Link>
            </div>
        </div>

    )
}

function ButtonSucesso({text}){
    return(
        <div className={styles.ButtonSucesso_container}>
            <button>{text}</button>
        </div>
    )
}