import Container from '../layout/Container'
import styles from './Login.module.css'

import ButtonLogin from '../componentsLogin/ButtonLogin'
import ButtonRegistrar from '../componentsLogin/ButtonRegistrar'

// import express from 'express'
// import cors from 'cors'
// import * as fs from 'node:fs'
    
// const app = express()

// app.use(express.json())
// app.use(cors())

// const usuario = meuUsuario

import axios from 'axios'

function Login(){



    


    return(
        <div className={styles.Login_container}>
            <Container className={styles.subLoginContainer}>
                <h1>Seja Bem-Vindo ao banco <span>FasteBank!</span></h1>

                    <p>
                        Mas antes de começar, escolha uma das opições abaixo:
                    </p>
                <div>
                <ButtonLogin text='Login'/>
                <ButtonRegistrar text='Registrar'/>
                
                </div>
            </Container>
        </div>
    )
}
export default Login