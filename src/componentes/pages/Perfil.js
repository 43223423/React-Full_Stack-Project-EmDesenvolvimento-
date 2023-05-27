import Container from '../layout/Container'
import styles from './Perfil.module.css'

import logo from '../../img/logo.jpg'

import ListaComponentes from '../componentesLogin/ListaComponentes'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import axios from 'axios'
import { useState } from 'react'

function Perfil(){

    const [imagem, setImagem ] = useState()

    axios.get('http://127.0.0.1:8000/Usuarios/',{

    })
    .then(response => {
        const data = response.data
        const last = data[data.length - 1]
        const foto = last.imagem
        setImagem(foto)
    })


    return(
        <div className={styles.PerfilContainer}>
            <Container >
                <div className={styles.SubPerfilContainer}>
                    <h1>Perfil</h1>
                    <div className={styles.foto}>
                        <img src={imagem}/>

                    </div>
                    <div>
                        <Link to='/editar'>
                            <ListaComponentes name='Editar perfl'/>
                        </Link>
                        <ListaComponentes name='Meu FasteBank'/>
                        <ListaComponentes name='Meu número'/>
                        <ListaComponentes name='Meu Email'/>
                        <ListaComponentes name='Dados pessoais'/>
                        <ListaComponentes name='Conta banc[aria'/>
                        <ListaComponentes name='Cartões'/>
                        <hr className={styles.row}></hr>
                        <Link to='/'>
                        <ListaComponentes  name='Sair'/>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Perfil