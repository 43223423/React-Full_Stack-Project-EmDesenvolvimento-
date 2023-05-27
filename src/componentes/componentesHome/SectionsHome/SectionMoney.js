import styles from './SectionMoney.module.css'
import Container from "../../layout/Container"
import imagem from '../../../img/emprestimo.webp'
import ContentHome from '../ContentHome'
import Input from '../../subComponentes/Input'
import BottonHome from './BottonHome'

function SectionMoney(){
    return(
        <div className={styles.SectionMoney_container}>
            <ContentHome>
                
                    <img src={imagem}/>
                    
                <div className={styles.SubSectionMoney}>
                <h1>Diversas opções aqui no FasteBank</h1>
                <span>Aqui no FasteBank temos varias opções {'\n'}
                    para melhorar a sua experiência
                </span>

                <BottonHome/>

                </div>
            </ContentHome>
        </div>
    )
}
export default SectionMoney