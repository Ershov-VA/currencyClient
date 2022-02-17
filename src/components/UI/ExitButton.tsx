import React from 'react'
import { useDispatch, useSelector,  } from 'react-redux';

import { Button} from 'antd'

import { removeAuthToken } from '../../store/auth';
import { RootState } from '../../store';

function ExitButton() {  
    const token = useSelector((state:RootState) => state.auth.token)
    
    const dispatch = useDispatch()
      const exit = () => {
        localStorage.removeItem('token')
        dispatch(removeAuthToken())
        
        console.log(token);
        
    }

    return (
      <div>
            <Button type="primary" onClick={exit}>Выход</Button>
      </div>
    )
}

export default ExitButton