import reactRouterDom from 'react-router-dom'
import Container from '../layout/Container'
import styles from './Emprestimo.module.css'

function Emprestimo(){
    return(
        <div className={styles.Container_Emprestimo}>
            <h1>Seção de Emprestimo</h1>
            
                <div className={styles.Input}>
                    <Input_Emprestimo type='text' input='Digite seu valor' text='Digite o valor que ira ser solicitado'></Input_Emprestimo>
                    <Input_Emprestimo type='text' input='Digite o número de parcelas que ira pagar' text='Digite as parcelas '></Input_Emprestimo>
                    <Input_Emprestimo type='text' input='Observação' text='Digite uma observação'></Input_Emprestimo>
                </div>

            
        </div>
    )
}
export default Emprestimo

function Input_Emprestimo({text, input, type, }){
    return(
        <div className={styles.Container_Input}>
            <label placeholder={text}>{text}</label>
            <input type={type} placeholder={text} ></input>
        </div>
    )
}