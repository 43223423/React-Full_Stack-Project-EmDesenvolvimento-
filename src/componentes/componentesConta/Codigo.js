import {FaArrowLeft} from 'react-icons/fa'
import styles from './Codigo.module.css'
import Container from "../layout/Container"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import axios from 'axios'
import { useCallback, useContext, useEffect, useState } from 'react'
import DataContext from '../../DataContext/DataContext'
import Conta from './Conta'

function Codigo(){

    const [codigoBarras, setCodigoBarras] = useState()

    const [descricao, setDescricao] = useState()

    const [valor, setValor] = useState()

    const [codigoDes, setCodigoDes ] = useState()

    const [valorDaConta, setValorDaConta] = useState()

    const [id_transacao, setId_transacao] = useState()

    const token = localStorage.getItem('token')

    const valor3 = sessionStorage.getItem('somar')

    const [agencia, setAgencia] = useState()
    const [numero, setNumero] = useState()
    const [Cliente_Conta, setCliente_Conta] = useState()
    const [saldo, setSaldo] = useState(0)
    
    
    const tokenCli = localStorage.getItem('token')
    
    const id_banco = sessionStorage.getItem('codigo_banco')

       const Submit = async () =>{
        const codigo = localStorage.getItem('codi')

        try{
            axios.all([
                await axios.post('http://127.0.0.1:8000/Transacoes/',{
                    codigo:codigoBarras,
                    valor:valor,
                    descricao:descricao,
                    cliente:codigo
              
            },{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type':'application/json'
                    
                }
            }),
       
            axios.get('http://127.0.0.1:8000/Transacoes/',{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
        ])
        .then(axios.spread(function(responseGet, responsePost){
            const valueGet = responseGet.data.id_transacao
            localStorage.setItem('id_transferecia',valueGet)
            
            const valuePost = responsePost.data
            
            
     
        }))
        }catch(error){
            console.log(error)
        }
        try {

            const get = await axios.get(`http://127.0.0.1:8000/ContaBancaria/${id_banco}/`,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type':'multipart/form-data'
                }
            }).then(respo =>{
    
                const date = respo.data
                const age = date.agencia
                const number = date.numero
                const id_Cliente_Conta = date.Cliente_Conta
                const sal = date.saldoBancario
                const sald = date.saldoBancario
                console.log(date)

                const Subtracao_Saldo = parseInt(sald) - parseInt(valor)
                console.log(Subtracao_Saldo)
    
                const put =  axios.put(`http://127.0.0.1:8000/ContaBancaria/${id_banco}/`,{
                    agencia:age,
                    numero:number,
                    saldoBancario: Subtracao_Saldo,
                    Cliente_Conta:id_Cliente_Conta,
    
                },{
                    headers:{
                        'Authorization': `Bearer ${token}`,
                        'Content-Type':'multipart/form-data'
                    }
                }).then(respo => console.log(respo))
    
      
            })
      
        } catch (error) {
            console.log(error)
            
        }
        try {
            
       

        } catch (error) {
            console.log(error)
        }
       
    }

    return(
        <ContainerCodigo>
            <div className={styles.ContainerCodigo}>
                <div className={styles.Back_container}>
                    <Back/>
                </div>
                <div>
                    <h1>
                        Pagar boleto
                    </h1>
                    
                </div>

                <div className={styles.Input_container}>
                    <h3>
                        Digite o codígo de barras: 
                    </h3>
                        <InputCodigo text='Codígo de barras'
                        onChange={(e)=> setCodigoBarras(e.target.value)}
                        />
                 
                        <InputCodigo text='Descrição  (Opcional)'
                        onChange={(e) => setDescricao(e.target.value)}
                        />
                        <ValorF text='Insira o valor da conta:'
                        onChange={(e) => setValor(e.target.value)}
                        />
                </div>
                <Link to='/conta'>
                    <ButtonCodigo text='Avançar'
                    onClick={Submit}
                    />
                </Link>
            </div>
        </ContainerCodigo>
    )
}
export default Codigo

function InputCodigo({text, onChange}){
    return(
        <div className={styles.InputCodigo_container}>
            <input maxLength='30' placeholder={text} onChange={onChange}></input>
            
        </div>
    )
}
function ContainerCodigo(props){
    return(
         <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}
function ButtonCodigo({text, onClick}){
    return(
        <div className={styles.ButtonCodigo_container}>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}
function Back(){
    return(
        <div>
            <Link to='/home'>
                <FaArrowLeft color='black' size='30' />
            </Link>
        </div>
    )
}
function ValorF({onClick, text, onChange}){
    return(
        <div className={styles.InputValor}>
            <input onClick={onClick} maxLength='10' type='number' onChange={onChange} placeholder={text}></input>
        </div>
    )
}