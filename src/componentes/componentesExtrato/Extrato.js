import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import ContentHome from '../componentesHome/ContentHome'
import styles from './Extrato.module.css'
import axios from 'axios'
import { useState } from 'react'

function Extrato(){

    


    return(
        <div className={styles.Container_Principal}>

            <div className={styles.ContainerButtom}>
                <Link to='/home'>
                    <button>Voltar</button>
                </Link>
            </div>
           
                <div className={styles.ContainerTitle}>
                    <h1 style={{marginBottom:'0 auto'}}>Extrato</h1>
                </div>
           
            

            <Item_Extrato/>

            <Item_Extrato/>

            <ContentHome>

            </ContentHome>
        </div>
    )
}
export default Extrato

function Item_Extrato(){

    const id_tra = localStorage.getItem('id_transferecia')

    const [data, setData] = useState([])

    const [valor, setValor] = useState([])

    const [nome, setNome] = useState()

    const [sobre, setSobre ] = useState([])

    const token = localStorage.getItem('token')

    const get = axios.get(`http://127.0.0.1:8000/Transacoes/${id_tra}/`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    .then(respon => {
        const data = respon.data
        const dia = data.data_transacao
        const valor = data.valor
        const descri = data.descricao
        setData(dia)
        setValor(valor)
        setSobre(descri)
    })
    
    return(
        <div className={styles.Container_ItemPrincipal}>
            <div className={styles.Container_Data}>

                <h3 style={{fontSize:'30px', marginTop:'10px'}}>{data}</h3>
            </div>

            <div className={styles.Container_Dados}>
                <h3>{sobre}</h3>

                <h3 className={styles.Text_valor}>Valor: R$ {valor}</h3>

                <h2>Edna De Oliveira <br/>
                    Instituição: Banco Sla
                </h2>
            </div>
            <hr style={{width:'30pc', }}/>
        </div>
    )
}