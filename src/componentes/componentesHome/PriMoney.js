import Container from '../layout/Container'
import ContentHome from './ContentHome'
import styles from './PriMoney.module.css'

import logo from '../../img/logo.jpg'

import { useState, useEffect, createContext, useContext } from 'react'

import axios from 'axios'

import ButttonEntrar from '../componentesEntrar/ButtonEntrar'

import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'



function PriMoney(){

    const [superid, setSuperId] = useState()
 
    const [email, setEmail] = useState()

    const location = useLocation()

    const [toke_cli, setToken_Cli] = useState()

    const [saldo, setSaldo ] = useState()

    const zero = 0

    const id = localStorage.getItem('id')

    const token = localStorage.getItem('token')

    
    

    const [money, setMoney] = useState()


            const get = axios.get(`http://127.0.0.1:8000/Usuarios/${id}/`,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }

            }).then(response => {
                const data = response.data
                const email = data.email
                

                setEmail(email)
            })

            const dados = sessionStorage.getItem('somar')
            
            const id_banco = sessionStorage.getItem('codigo_banco')
            
            const getMoney = axios.get(`http://127.0.0.1:8000/ContaBancaria/${id_banco}/`,{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }).then(respo => {
                const saldo = respo.data.saldoBancario

                setSaldo(saldo)
            })


    return(
        
    <ContentHome>
        
        <div className={styles.Money_container}>

                <div className={styles.SubMoney}>
                    <div className={styles.UpMoney}>
                        <img src={logo}/>
                 
                      <h3>{email}</h3> 
                        
                    
                    </div>
                    <div className={styles.DownMoney}>
                        <h2> Saldo da Conta: <span style={{fontSize:'30px', fontWeight:'bold', marginTop:'6px'}}> R$ {saldo},00</span></h2>
                    </div>
                   
                </div>
           
        </div>
        </ContentHome>
    )
}




export default PriMoney