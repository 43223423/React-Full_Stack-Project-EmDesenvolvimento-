import Container from "../layout/Container"

import styles from './EditarPerfil.module.css'

import logo from '../../img/logo.jpg'
import Conta from "../componentesConta/Conta"
import axios from "axios"
import { useState } from "react"
import { TbError404 } from "react-icons/tb"

function EditarPerfil(){

    const [email, setEmail] = useState()

    const [novoEmail, setNovoEmail] = useState()

    const [nome, setNome] = useState()

    const [novoNome, setNovoNome] = useState()

    const [imagem, setImagem ] = useState()

    const [novoImagem, setNovoImagem] = useState({})

    const [password, setPassword] = useState()

    const [novoPassword, setNovoPassword] = useState()

    const [status, setStatus] = useState()

    const id = localStorage.getItem('id')
    


    const get = axios.get(`http://127.0.0.1:8000/Usuarios/${id}/`,{

    })
    .then(response => {
        const data = response.data
        const email = data.email
        const nome = data.nomeUsuario
        const imagem = data.imagem
        const password = data.password
        setEmail(email)
        setNome(nome)
        setImagem(imagem)
        setPassword(password)
    })

    const Submit = async () =>{
        try{
            const put = await axios.put(`http://127.0.0.1:8000/Usuarios/${id}/`,{
                nomeUsuario:novoNome,
                email:novoEmail,
                imagem:novoImagem,
                password:novoPassword
            },{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }).then(respo => {
                const status = respo.status
                setStatus(status)
            })

        }catch(error){
            console.log(error)
        }
    }

    return(
        
        <div  className={styles.Container_EditarPerfil}>
            
                <div className={styles.ContainerFoto}>

                    {status == 200 ? <h1>Conta atualizada com Sucesso</h1> : ''}
                    {status >= 400 ? <h1>Algo deu errado <br/> Faça de novo</h1> :''}

                        <img src={imagem}/>
                    <div className={styles.File}>
                    <label htmlFor='arquivo'>Editar foto</label>
                        <input type="file" id='arquivo' onChange={(e)=> setNovoImagem(e.target.files[0])}></input>
                        
                    </div>
                </div>
           
            <div >
                    
                    <Input_Editar text='Editar nome:' 
                    placeholder='Nome'
                    // value={nome}
                    onChange={(e) => setNovoNome(e.target.value)}
                    ></Input_Editar>
                    <hr/>
                    <Input_Editar text='Editar email:'
                    placeholder='Email'
                    // value={email}
                    onChange={(e) => setNovoEmail(e.target.value)}
                    ></Input_Editar>
                    <hr/>
                    <Input_Editar text='Editar senha:'
                    placeholder='Senha'
                    onChange={(e) => setNovoPassword(e.target.value)}
                    type='password'
                    ></Input_Editar>
                    <hr/>
                   
                    {/* <Input_Editar text='Editar Rg:' placeholder='Registro Geral'></Input_Editar>
                    <hr/> */}
            </div>
            <div className={styles.ContainerButton}>
                <button onClick={Submit} >Salvar</button>
            </div>

        </div>
    
    )
}
export default EditarPerfil

function Input_Editar({text, placeholder, value,type, onChange, nome}){
    return(

    
    <div className={styles.ContainerInput}>
       
        <label>{text}</label>
        
        <input className={styles.Input} nome={nome} type={type} value={value} onChange={onChange} placeholder={placeholder}></input>
    
    </div>
    )
}
