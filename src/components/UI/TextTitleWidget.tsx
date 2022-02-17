import React from 'react'

import './ui.style.css'

function TextTitleWidget({title}:any) {  

    return (
      <div>
          <div className="text-widget__title">
            {title}           
          </div>      
      </div>
    )
}

export default TextTitleWidget