import { Button } from 'antd'
import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setBasisCurrency } from '../../store/currency'


function SelectBasisCurrency() {  

  const buttonsArr = ['USD', 'RUB', 'EUR', 'JPY']

  const defaultBasis = useSelector( (state:RootState) => state.currency.basis)

  const dispatch = useDispatch()

  const setBasis = (item:String) => {          
      dispatch(setBasisCurrency(item))      
  }


    return (
      <div>
        <div className="basisCurrency-widget">
          <div className="basisCurrency-widget__title">
            {defaultBasis}           
          </div>    
          <div className="basisCurrency-widget__buttons">
            {
              buttonsArr.map( (item:string) => {
                return (
                  <Button disabled={item === defaultBasis} onClick={() => setBasis(item)} key={item} className="basisCurrency-widget__button" >{item}</Button>
                )                
              })
            }
          </div>      
        </div>
      </div>
    )
}

export default SelectBasisCurrency