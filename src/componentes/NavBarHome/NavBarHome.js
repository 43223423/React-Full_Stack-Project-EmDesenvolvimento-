import ContanerNavBar from './ContainerNavBar'
import styles from './NavBarHome.module.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Container from '../layout/Container'
import logo from '../../img/logo.jpg'
import foto from '../../img/dog.jpeg'


import axios from 'axios'
import { useState, useEffect } from 'react'

function NavBarHome(){

    const [imagem, setImagem] = useState()


    
    const id = localStorage.getItem('id')

    const token = localStorage.getItem('token')

    const get = axios.get(`http://127.0.0.1:8000/Usuarios/${id}/`,{
        headers:{
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response =>{
        const data = response.data
        const imagem = data.imagem
        setImagem(imagem)
    })

    return(
        <div className={styles.NavBar_container}>
            <ContanerNavBar>
                        <Link to='/perfil'>
                            <img src={imagem}/>
                        </Link>
                            <Link to='/home'>
                        <img className={styles.logo} src={logo}/>
                        </Link>
                <div className={styles.Imagens} >
                      
                

                </div>
            </ContanerNavBar>
            
        </div>
    
    )
}
export default NavBarHome
