
import styles from './Entrar.module.css'

import ButtonLogin from '../componentsLogin/ButtonLogin'
import Container from "../layout/Container"
import Input from '../subComponentes/Input'
import ButttonEntrar from '../componentesEntrar/ButtonEntrar'

import axios from 'axios'

import { Redirect, Link } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './Home'

import { useState, createContext, useContext } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import PriMoney from '../componentesHome/PriMoney'

function Entrar(){

    const history = useHistory()

    const [email, setEmail] = useState()

    const [password, setPassword] = useState()

    const [access, setAccess] = useState()

    const [status, setStatus ] = useState()

    const [statusRe, setStatusRe] = useState()

    const [token, setToken] = useState()

    const trt = localStorage.status

   
        // const dados = 'wqwqwq'
        // history.push({
        //     pathname:'/home',
        //     state:{dados}
        // })

    

 
    const login = async(e) =>{ 
        e.preventDefault()
        
        try{
            const token_cli = localStorage.getItem('token_cli')
        
        const sla = await axios.post('http://127.0.0.1:8000/token/', {
           username:email,
           password:password
            
            
        }, {
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                
            }

        }).then(reponse => {
            const sla = reponse.data
            const tok = sla.access
            
            localStorage.setItem('token', tok)

            const sta = reponse.status
            
            setStatusRe(sta)
           
        }).then(resp =>{
          
            const toke = localStorage.getItem('token')
            
            setToken(toke)
        })
    }catch(error){
        console.log(error)
    }

    }
   

    return(
        <div className={styles.Entrar_container}>
             <h1> Que bom ver você aqui de novo!</h1>
             <p>Insira seus dados abaixo</p>

             <div>
            {statusRe == 200 ? <Redirect to='/home'/> : 
            <div>
                {/* <h1>Ocorreu um errrrooo</h1> */}
            </div>}

            <div>
            {status == 401 ? <h1>Esta conta não existe!</h1> : ''} 
            {status == 400 ? <h1>Por favor, insira seus dados!</h1>:'' }
            </div>
        </div>
            <Container>
               

            </Container>
            <form className={styles.form}>
                <Input type='text' text='Insira seu RG'
                name='name'
                placeholder='Insira seu RG'

                />
                <Input type='text' text='Insira seu nome'
                name='name'
                placeholder='Insira seu nome'
                onChange={(e) => {setEmail(e.target.value)}}
                />
                <Input type='password' text='Insira sua senha'
                name='password'
                placeholder='Insira seu senha'
                onChange={(e) => setPassword(e.target.value)}
                />
                <ButttonEntrar text='Entrar'
                onClick={login}
                />
            </form>
            
        </div>
    )
}
export default Entrar
