import React, { useEffect, useState } from 'react'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { RateItem } from '../../interface';

import './ui.style.css'

function StatisticItem({title, cost}:any) {  

    const ratesYesterday = useSelector( (state:RootState ) => state.rateYesterday.rates)
    const ratesToday = useSelector( (state:RootState ) => state.rate.rates)

    const basisCurrency = useSelector((state:RootState) => state.currency.basis)
    const [currentCost, setCurrentCost] = useState(0)
    const [yesterdayCost, setYesterdayCost] = useState(0)

    const [rateDelta, setRateDelta] = useState(0)

    useEffect(() => {     

        let rateYestardayCost = null
        let rateYesterdayCostBasis = 0
        const rateTodayCost = ratesToday.find( (item:RateItem) => item.ticker === basisCurrency).cost

        if (ratesYesterday.length > 0) {            
            rateYestardayCost = ratesYesterday.find( (item:RateItem) => item.ticker === title).cost  
            rateYesterdayCostBasis = ratesYesterday.find( (item:RateItem) => item.ticker === basisCurrency).cost
        }
        if (! rateYestardayCost) {            
            rateYestardayCost = cost
        } 
        const delta = rateYesterdayCostBasis > 0? rateYestardayCost / rateYesterdayCostBasis : 0

        setYesterdayCost(delta)

        setCurrentCost(cost / rateTodayCost)        
        setRateDelta(currentCost - yesterdayCost)
    })

    return (
      <div className='statistic-item'>
            <div className="statistic-item__title">{title}</div>
            <div className="statistic-item__cost">{currentCost.toFixed(4)}</div>
            <div className="statistic-item__delta">
                {rateDelta >=0 && <ArrowUpOutlined />}
                {rateDelta < 0 && <ArrowDownOutlined />}
                { rateDelta.toFixed(4) }            
            </div>
      </div>
    )
}

export default StatisticItem