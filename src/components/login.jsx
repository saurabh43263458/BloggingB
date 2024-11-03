import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authslice'
import Button from "./button";
import Input from "./Input"
import "./login.css"
import {useDispatch} from "react-redux"
import authService from '../appwrite/auth';
import {useForm} from "react-hook-form"

const Login = () => {
    const navigate  = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const {error,setError} = useState("")

    const login = async(data) =>{
      
        try{
          const session= await authService.login(data);
          if(session){
            const userData = await authService.getCurrentUser()
            if(userData){
                dispatch(authLogin(userData));
                navigate("/");
            }
          }
        }catch(error){
            setError(error.message)
        }
    }


  return (
    <div className='main-login'>
    <div className='main-sub-login'>
        <div className="logo">
          <img src=".\src\components\Bigo_2.webp" alt=""  className='img-signup'/>  
        </div>
            <h2>Sign in to your acount</h2>
            <p>Don&apos;t have any acount ? &nbsp;
                <Link to="/signup" className='signup'>
                Sign Up</Link>
            </p>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit(login)}>
               <div>
                <Input label="Email:"
                placeholder="enter your email"
                type="email"
                {...register("email",{
                    required:true,
                    validate:{
                        matchPatern:(value) => /\b[\w\\.-]+@[\w\\.-]+\.\w{2,4}\b/gi.test(value) ||
                        "email address must valid",
                    }
                })}/>
                <Input
                label="password"
                type="password"
                placeholder="Enter your password"
                {...register("password",{
                    required:true,
                })}/>
          <div className='button-login'>
          <Button
            type="submit" >Sign up</Button>
          </div>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Login