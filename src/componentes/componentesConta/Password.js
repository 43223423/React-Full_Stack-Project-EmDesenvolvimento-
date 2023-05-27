
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Password.module.css'
import Sucesso from './Sucesso'

import {MdAttachMoney} from 'react-icons/md'

function Password(){


    return(
        <div className={styles.UpContainerPass}>
            
                <ContainerPass>

                    <div className={styles.textPass}>
                <h2>Agora digite sua senha</h2>
                </div>
                <div className={styles.Password_container}>
                    
                    <div style={{display:'flex', alignItems:'center'}}>
                            <InputConta type='password' maxLength='1'/>
                            <InputConta type='password' maxLength='1'/>
                            <InputConta type='password' maxLength='1'/>
                        </div>
                        <div style={{display:'flex', flexDirection:'row', alignItems:'center', marginBottom:'14px'}}>
                            <InputConta type='password' maxLength='1'/>
                            <InputConta type='password' maxLength='1'/>
                            <InputConta type='password' maxLength='1'/>
                        </div>
                        
                    </div>
                    <Link to='/sucesso'>
                    <ButtonPass text='Confirmar o pagamento!'/>
                    
                    </Link>
                    
                    

                <div className={styles.Saldo_container}>
                    <hr/>
                     <Vista text='Á vista'/>
                    <h5> Forma de pagamento: </h5>

                    <h2>Seu saldo: R$999,00</h2>

                   

                </div>
                </ContainerPass>
            </div>
        
    )
}
export default Password

function ContainerPass(props){
    return(
        <div className={styles.ContainerPass}>
            {props.children}
        </div>
    )
}

function InputConta({type, maxLength}){
    return(
        <div className={styles.InputConta_container}>
            <input style={{display:'flex', alignItems:'center', justifyContent:'center'}} type={type} maxLength={maxLength}/>
        </div>
    )
}

function ButtonPass({text}){
    return(
        <div className={styles.ButtonPass_container}>
            <button>{text}</button>
        </div>

    )
}

function Vista({text}){
    return(
        <div className={styles.Vista_container}>
             <button>{text}</button>
        </div>
    )
}