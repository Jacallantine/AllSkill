"use client";
import "../app/CSS/register.css";
import { useState } from 'react';

import { useRouter } from 'next/navigation';
export default function RegisterForm()

    {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const router = useRouter();

    async function loginRequest(e) {
        e.preventDefault();  

        const data = { email, password, firstName, lastName };
      

          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
      
          if (!response.ok) {
            throw new Error("Error, Try again");
          }
          else{
            alert("created account")
            router.push('/Login');
          }
      
      }
      
        return (<div className='md:w-3/5 h-full flex justify-center items-center'>
            <form className="form" onSubmit={loginRequest}>
            <p className="title">Register </p>
            <p className="message">Signup now and get full access to our app. </p>
            <div className="flex">
              <label>
                <input required type="text" className="input text-black" value={firstName} onChange={e => setfirstName(e.target.value)} />
                <span>Firstname</span>
              </label>
              <label>
                <input required  type="text" className="input text-black" value={lastName} onChange={e => setlastName(e.target.value)} />
                <span>Lastname</span>
              </label>
            </div>  
            <label>
              <input required type="email" className="input text-black" value={email} onChange={e => setEmail(e.target.value)}/>
              <span>Email</span>
            </label> 
            <label>
              <input required  type="password" className="input text-black" value={password} onChange={e => setPassword(e.target.value)} />
              <span>Password</span>
            </label>
            <label>
              <input required type="password" className="input text-black" value={password2} onChange={e => setPassword2(e.target.value)}/>
              <span>Confirm password</span>
            </label>
            <button className="submit">Submit</button>
            <p className="signin">Already have an acount ? <a href="/Login">Signin</a> </p>
          </form>
          </div>)
    }
