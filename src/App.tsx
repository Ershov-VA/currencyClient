import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './store';
import { setAuth } from './store/auth';
import Auth from './views/auth';
import HomeLayout from './views/Home';

function App() {

  const dispatch = useDispatch();
  let localStorageToken = localStorage.getItem('token') ? localStorage.getItem('token') : null
 
  let token = useSelector( (state:RootState) => state.auth.token)
  if (! token) dispatch(setAuth(localStorageToken))

  return (
    <div className="App">      
       {! token && <Auth />}
       {token && <HomeLayout />}
    </div>
  );
}

export default App;
