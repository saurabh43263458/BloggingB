
import React,{ useState,useEffect } from 'react'
import './App.css';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login,logout } from './store/authslice';
import Footer  from './components/footer';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
function App() {
const [loading,setloading] = useState(true);
const dispatch = useDispatch();

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
        dispatch(login({userData}));
    }
    else{
        dispatch(logout());
    }
  })
  .finally(()=>setloading(false));
},[])
 
  return !loading ?(
    <div className='main-div'><div>
      </div>
    <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      </div>
  ):null
}

export default App
