import Container from '../layout/Container'
import styles from './Home.module.css'

import PriMoney from '../componentesHome/PriMoney'
import SectionMoney from '../componentesHome/SectionsHome/SectionMoney'
import ContentHome from '../componentesHome/ContentHome'
import Financias from '../componentesHome/Financias'


import OpcoesPriMoney from '../componentesHome/SectionsHome/BotoesPriMoney'

import { useState, useEffect } from 'react'

function Home(){
    
   


    return(
        <div className={styles.Home_container}>
            <ContentHome>
                
                <ContentHome>
                <div className={styles.containerPri}>
                    <PriMoney/>
                    <OpcoesPriMoney/>
                </div>
                </ContentHome>

            </ContentHome>
            <ContentHome>
                <SectionMoney/>               
            </ContentHome>  
            <ContentHome>
            <Financias/>
            </ContentHome>
           
        </div>
        
    )
}
export default Home