import {FaTiktok ,FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaInstagram} from 'react-icons/fa'
import Container from './Container'
import styles from './Footer.module.css'

import logo from '../../img/logo.jpg'
import { GiDefibrilate } from 'react-icons/gi'


import apple from '../../img/apple.png'
import play from '../../img/play.png'

function Footer(){
    return(
        <div className={styles.Footer_container}>
            <Container>
            <div className={styles.subFooter}>
                <h2>FasteBank &copy; 2023</h2>
                <hr></hr>
                <p><i>Na velocidade certa!</i></p>
            </div> 
                
            
              
                <Container>

                <ComponentsFooter/>
                
                </Container>
                
            </Container>
            <Downloads/>
        </div>
    )
}

export default Footer


function ComponentsFooter(){
    return(
        <div className={styles.ComponentsFooter_container}>
        
                <h1>Início<span> <br/>Sobre o FasteBank <br/> Imprensa <br/> Ética e Compilance <br/></span></h1>
                <h1>Para Você<span> <br/>Parcele Boleto <br/> FasteBank Card <br/> Faça um Pix <br/> Pague com QR Code <br/> Rendimentos</span></h1>
                <h1>Para seu Negócio<span> <br/>FasteBank Empresas <br/> Faste Pro <br/> Receba com FasteBank <br/> Assinaturas</span></h1>
                <h1>Central de Ajuda<span> <br/>Para você <br/> Para seu Negócio <br/> Regulamentos <br/> Fale com a gente</span></h1>
                <h1>Informações<span> <br/>Privacidade <br/> Segurança<br/> Demonstrações Financeiras <br/> Tarifas e Taxas <br/> Sistema de informação de crédito </span></h1>
                <hr></hr>
        </div>
    )
}

function Downloads(){
    return(
        <div className={styles.Downloads_container}>

            <div>
                  <ul className={styles.icons}>
                    
                    <li>
                        <FaLinkedin/>
                    </li>
                    <li>
                        <FaTwitter/>
                    </li>
                    <li>
                        <FaYoutube/>
                    </li>
                    <li>
                        <FaWhatsapp/>
                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                   
                    
                </ul>
            </div>

            <div className={styles.sites}>
                <img src={apple}/>
                <img src={play}/>
            </div>
           
        </div>
        
    )
}