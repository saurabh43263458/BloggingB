import React,{useState} from 'react'
import authService from '../appwrite/auth'
import {Link,useNavigate} from 'react-router-dom'
import login from '../store/authslice'
import Button from './button'
import "./SignUp.css"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Input from './Input'

export function SignUp(){
    const navigate  =useNavigate();
    const [error,setError] =useState("");
    const dispatch = useDispatch(); 
    const {register,handleSubmit} =useForm();

const create = async(data) =>{
        setError("");
        try{
const account=await authService.createAccount(data);
  if(account){
   const userData= await authService.getCurrentUser()
   if(userData){
    dispatch(login(userData));
    navigate("/");
   }
  }
        }
        catch(error){
          setError(error.message)  
          console.log(error);
        }
    }
  return (
    <div className='main-sign-up'>
        <div className='main-sub-sign-up'>
            <div className="logo">
              <img src=".\src\components\Bigo_2.webp" alt=""  className='img-signup'/>  
            </div>
           <div> <h2>Sign Up to Create Account</h2></div>
            <div className='main-signup-ask-sign-up'>
            <p>Already have an account ? &nbsp;
                <Link to="/login" className='SignIn'>
                Sign In</Link>
            </p>
            </div>
            {error && <p>{error}</p>}
             <form action="" className="form-input" onSubmit={handleSubmit(create)}>
                <div className='main-input-signup'>
                    <Input
                    className='name-sign-up'
                    label="Name"
                    placeholder="enter your full name"
                    {...register("name",{
                        required:true,
                    })}/>
                    <Input label="Email"
                    className="email"
                placeholder="enter your email"
                type="email"
                {...register("email",{
                    required:true,
                    validate:{
                        matchPatern:(value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "email address must valid",
                    }
                })}/>
                <Input
                label="Password"
                type="password"
                placeholder="enter your password"
                {...register("password",{
                    required:true,
                })}
                />
             <div className='button-signup'><Button type='submit' className=''>Create Account</Button></div>
                </div>
                
             </form>
        </div>
    </div>
  )
}

