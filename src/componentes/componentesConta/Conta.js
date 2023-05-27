import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Button from '../componentsLogin/ButtonLogin'
import Container from '../layout/Container'
import styles from './Conta.module.css'

import axios from 'axios'
import { useCallback, useContext, useState } from 'react'
import DataContext from '../../DataContext/DataContext'

function Conta(props){

    const [codigo, setCodigo] = useState()

    const [valor, setValor] = useState()

    const [descricao, setDescricao] = useState()


    const id_tra = localStorage.getItem('id_transferecia')

    const tokenCli = localStorage.getItem('token')

    const get = axios.get(`http://127.0.0.1:8000/Transacoes/${id_tra}/`,{
        headers:{
            'Authorization': `Bearer ${tokenCli}`
        }
      
    })
    .then(respo =>{
        const resp = respo.data
        const codigo = resp.codigo
        const valor = resp.valor
        const descri = resp.descricao
        setCodigo(codigo)
        setValor(valor)
        setDescricao(descri)
    })

    return(

        <div className={styles.Conta_container}>
            <h2 style={{color:"white"}}> Descrição da conta:</h2>
            <span  style={{color:"white"}}>{descricao}</span>
            <div className={styles.SubContainer}>
                <h2 style={{color:"white"}}>Codigo do boleto:</h2>
                <hr/>
                <span style={{color:"white"}}>{codigo}</span>
            </div>
            <ContainerConta>
                <div >
                    <h2 style={{color:"white"}}>
                        Banco:
                        <br/>
                        143 - LowBank S.M
                    </h2>
                </div>
                <div>
                    <h2 style={{color:'white'}}>
                        Valor: 
                        <br/>
                        <div style={{ textDecorationLine:'underline'}}>R$ {valor}</div>
                    </h2>
                </div>
                <div>
                    <h2 style={{color:'white'}}>
                        Vencimento
                        <br/>
                        31/03/2023
                    </h2>
                </div>
                <hr/>

                <div className={styles.AgendamentoContainer}>
                    <h3>Agendar para o dia<br/></h3>
                    
                <hr/>
                </div>
                
            </ContainerConta>
            <Link to='/password'>
                <ButtonConta text='Continuar com o pagamento'/>
            </Link>
        </div>
    )
}
export default Conta


function ContainerConta(props){
    return(
        <div className={styles.ContainerConta}>
            {props.children}
        </div>
    )
}

function ButtonConta({text}){
    return(
        <div className={styles.ButtonConta_container}>
            <button>{text}</button>
        </div>
    )
}