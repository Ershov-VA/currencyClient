import React from 'react'
import ExitButton from '../../components/UI/ExitButton'
import RateBlock from '../../components/RateBlock'


import './style.css'
import SelectBasisCurrency from '../../components/UI/SelectBasisCurrency'

function HomeLayout() {


  
    return (
      <div>
        <div className="layout">
          <div className="header"><ExitButton /></div>
          <div className="body">
            <div className="column">
              <SelectBasisCurrency />
              <RateBlock />
            </div>
          </div>
        </div>
        
          
      </div>
    )
}

export default HomeLayout