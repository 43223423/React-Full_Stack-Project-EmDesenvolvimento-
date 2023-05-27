import { Suspense, useEffect, useState } from 'react'
import ButttonEntrar from '../componentesEntrar/ButtonEntrar'
import Container from '../layout/Container'
import Input from '../subComponentes/Input'
import UploadFile from '../subComponentes/UploadFile'
import styles from './Registrar.module.css'

import axios from 'axios'

import DataContext from '../../DataContext/DataContext'
import Codigo from '../componentesConta/Codigo'

import sss from '../../img/apple.png'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import { createContext } from 'react'
import Home from './Home'
import PriMoney from '../componentesHome/PriMoney'


function Registrar(){

    const MeuContext = createContext()
    const [nomeSocial, setNomeSocial] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imagem, setImagem] = useState({})
    
    const [nome, setNome] = useState('')
    const [registro, setRegistro] = useState(0)
    const [idade, setIdade] = useState(0)
    const [phone, setPhone] = useState('')
    const [forekey, setForekey] = useState('')


    const [statusCreate, setStatusCreate] = useState()
    const [statusNome, setStatusNome] = useState()

    const [codigo, setCodigo ] = useState()

    const [id, setId] = useState()

    const history = useHistory()

    const handleChange = (event) =>{
        console.log(nomeSocial)
        console.log(email)
        console.log(password)
        console.log(imagem)

        
    }


    const urlCliente = 'http://127.0.0.1:8000/Clientes/'

    const token = localStorage.getItem('tokenCli')
  
    function NumerosBancarios(maxSize){
        return Math.floor(Math.random() * maxSize)
    }

    var randomAgencia = NumerosBancarios(1000000001)
    var numeroAgencia = NumerosBancarios(1001)



    const Submit = async (e) => {
        e.preventDefault();
        
        try{
            const user = await axios.post('http://127.0.0.1:8000/create_user/',{
                username:nomeSocial,
                email:email,
                password:password,
                is_staff:true,
                is_superuser:true
            })
            .then(respo =>{
                const data = respo.status
                console.log(respo)

            })
            
        }catch(error){
            if(error.isAxiosError){
                setStatusNome(JSON.stringify(error.response.data.username[0]))
                setStatusCreate(JSON.stringify(error.response.status))
            }
            else{
                console.log(error)
            }console.log(error)
           
        }
     
        try{
            axios.all([
                await axios.post('http://127.0.0.1:8000/Usuarios/', {
                    nomeUsuario:nomeSocial,
                    email:email,
                    password:password,
                    Usuario_Cliente:id,
                    imagem:imagem
        
                }, {
                    headers:{
                        'Content-Type':'multipart/form-data',
                        
                    }
                }),
                axios.get('http://127.0.0.1:8000/Usuarios/')
  ])    
                .then(axios.spread(function(responseGet, responsePost){
                    // const GET = 
                    const GET = responseGet.data.id
                    setId(GET)
                    localStorage.setItem('id', GET)
                }))
  
        }catch(error){
            console.log(error)
        }
        try{
            const get = await axios.post('http://127.0.0.1:8000/token/',{

                username:nomeSocial,
                password:password

            }).then(respo =>{
                const data = respo.data
                const access = data.access
                localStorage.setItem('tokenCli', access)
                

            })
            

        }catch(error){
          console.log(error)
        }
     
        
    }
    //=-=-=-=-=-=-=-=-=-=-=-==--=-=-=--==

        const SubmitCli = async (e) =>{
            e.preventDefault()

        try {
                const saldo = 0.00
                const codi = localStorage.getItem('codi')
                const url ='http://127.0.0.1:8000/ContaBancaria/'
                axios.all([
                    await axios.post(url,{
                    agencia:randomAgencia,
                    numero: numeroAgencia,
                    Cliente_Conta: codi,
                    SaldoBancario:saldo

                },{
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                }),
                await axios.get(url,{
                    headers:{
                        
                        'Authorization': `Bearer ${token}`,
                        'Content-Type':'multipart/form-data',
                       
                    }
                })

                ]).then(axios.spread(function(responseGet, responsePost ){
                    const data = responseGet.data
                    const codi = responseGet.data.codigo

                    const codigo = codi.codigo
                    sessionStorage.setItem('codigo_banco',codi)
                    
                }))
                
            } catch (error) {
                console.log(error)
            }
            
        try{
            axios.all([
                await axios.post(urlCliente, {
                    nome:nome,
                    rg:registro,
                    idade:idade,
                    numero:phone,
                    Usuario_Cliente:id,
                    
                }, {
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                }),
                await axios.get(urlCliente,{
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                })
            ])
            .then(axios.spread(function(responseGet, responsePost){
                const Get = responseGet.data.codigo
                
                localStorage.setItem('codi' , Get)
                
               
                            }))
            
        }catch(error){
            console.log(error)
        }
        }

    


    return(
        <div className={styles.FormContainer}>

            
<h1 style={{margin:'0 auto'}}>Agora insira dados da sua Conta Pessoal</h1>

            {statusCreate >= 200 && statusCreate <= 210 ? <h1>Conta criada com sucesso</h1> : ''}
            {statusCreate >= 400 ? <h1>{statusNome}</h1> : ''}
            
            <form encType='multipart/form-data'>
                <Input type='text' text='Insira seu nome'
                name='name'
                placeholder='Insira seu nome (Nome social)'
                onChange={(e) => setNomeSocial(e.target.value)}
                />
                <Input type='text' text='Insira seu email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Insira seu email'
                />
                <Input type='password' text='Insira sua senha'
                name='senha'
                placeholder='Insira sua senha'
                onChange={(e) => setPassword(e.target.value)}
                />
                
                <UploadFile type='file' text='Insira sua foto:'
                placeholder='Insira sua foto:'
                onChange={(e) => {setImagem(e.target.files[0])}}
                />
                     <ButttonEntrar
                onClick={Submit}
                text='Enviar'/>
            </form>
               
             

            <h1>Seja Bem-Vindo! <span>Agora insira seus dados abaixo:</span></h1>

            <form method='POST' className={styles.form01}>
                <Input type='text'
                name='Nome'
                text='Insira seu nome'
                placeholder='Insira seu nome'
                onChange={(e) => setNome(e.target.value)}
                />
                <Input type='number'
                name='RG'
                text='Insira seu RG'
                placeholder='Insira seu RG'
                onChange={(e) => setRegistro(e.target.value)}
                />
                <Input type='number'
                name='Idade'
                text='Insira sua idade'
                placeholder='Insira sua idade'
                onChange={(e) => setIdade(e.target.value)}
                />
                <Input type='number'
                name='Telefone'
                text='Insira seu telefone'
                placeholder='Insira seu telefone'
                onChange={(e) => setPhone(e.target.value)}
                
                />
                 <ButttonEntrar
                onClick={SubmitCli}
                
                text='Enviar'/>
                
                </form>
{/* 
                <Input type='text'
                name='Logradouro'
                text='Insira seu logradouro'
                placeholder='Insira seu logradouro'
                onChange={(e) => setPhone(e.target.value)}
                
                />
                <Input type='number'
                name='Telefone'
                text='Insira seu telefone'
                placeholder='Insira seu telefone'
                onChange={(e) => setPhone(e.target.value)}
                
                />
                    <Input type='number'
                name='Telefone'
                text='Insira seu telefone'
                placeholder='Insira seu telefone'
                onChange={(e) => setPhone(e.target.value)}
                
                /> */}
           

<div className={styles.Container_Voltar}>
                    <ButtonVoltar text='Voltar' />
               </div>
                
            

        </div>
    )
}
export default Registrar

function ButtonVoltar({text}){
    return(
        <div className={styles.ButtonVoltar}>
            <Link to='/'>
                <button>{text}</button>
            </Link>
        </div>
    )
}