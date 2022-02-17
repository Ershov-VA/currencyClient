import React, {useEffect, useState} from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

import { APIuri } from '..';
import { removeAllRates, setTodayRates } from '../store/rate';
import { removeYesterdayRates, setYesterdayRates } from '../store/rateYesterday'
import { axiosAuth, getCurrentDate, getYesterdayDate } from '../helpers';
import { Row,  DatePicker} from 'antd'
import StatisticGroup from './UI/StatisticGroup';

import './style.css'


function RateBlock() {  
    
    const token = useSelector( (state:RootState) => state.auth.token)
    const rates = useSelector( (state:RootState) => state.rate.rates)
    const basisCurrency = useSelector( (state:RootState ) => state.currency.basis)
    

    const [NoData, setNoData] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const getRateFetch = async () => {
            const fetch = await axiosAuth().get(`${APIuri}/rate`,  { params: { token } })    
            if (fetch.status === 200) {
                const rawData = fetch.data
                dispatch(setTodayRates(rawData))   
                await getYesterdayRateFetch()
            }
        }
        
        const allFetch = async () => {
            await getRateFetch()           
        }
        allFetch()        
    },[])

    const getYesterdayRateFetch = async (date:any = null) => {
        try {
            const yesterdayDate = getYesterdayDate(date)
            const fetch = await axiosAuth().get(`${APIuri}/rate/date/${yesterdayDate}`, {params: {token}})
            if (fetch.status === 200) {
                const rawData = fetch.data                
                if (rawData.status === 'not found') {
                    dispatch(removeYesterdayRates())
                } else {   
                    dispatch(setYesterdayRates(rawData))
                }
            }
        } catch(error) {
            console.log(error);            
        }        
    }



    const changeDate = (date:any) => {
        const fetchRateByDate = async(date:any) => {
            const selectedDate = getCurrentDate(date)
            const fetch = await axiosAuth().get(`${APIuri}/rate/date/${selectedDate}`,{ params: {token}})    

             if (fetch.status === 200) {
                const rawData = fetch.data                
                if (rawData.status === 'not found') {
                    dispatch(removeAllRates())
                    setNoData(true)
                } else {
                    dispatch(setTodayRates(rawData))
                    await getYesterdayRateFetch(date)
                    console.log('test');
                    
                    setNoData(false)
                }
            }
        }
        fetchRateByDate(date)
        
    }

    const getToday = ():string => {
        const now = moment()
        return now.format('DD.MM.YYYY').toString()
    }

    
 
    const dateFormat = 'DD.MM.YYYY';

    return (
      <div>
          <div className="rate-block">
            <h2>Курсы валют на <DatePicker defaultValue={moment(getToday(), 'DD.MM.YYYY')} onChange={changeDate} format={dateFormat}/></h2>
            <Row className='rate-blockRow__wrap'>
                <StatisticGroup rates={rates} basisCurrency={basisCurrency}/>
                { NoData && <> <h3>Нет данных</h3> </>}
            </Row>
        </div>

      </div>
    )
}

export default RateBlock