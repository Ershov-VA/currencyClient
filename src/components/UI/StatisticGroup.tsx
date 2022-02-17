import React from 'react'
import { RateItem } from '../../interface';
import { Col } from 'antd';
import StatisticItem from './StatisticItem';

import './ui.style.css'


function StatisticGroup({rates, basisCurrency}: any) {  
    
    return (
        <>
        { rates.map( (item:RateItem) => {  
            if(item.ticker !== basisCurrency) {
                return (
                    <Col key={item.ticker} >
                        <StatisticItem title={item.ticker} cost={item.cost} basisCurrency={basisCurrency}/>
                    </Col>
                )                
            } else {
                return(<></>)
            } })
        }
        </>
    )
}

export default StatisticGroup