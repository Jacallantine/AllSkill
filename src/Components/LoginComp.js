"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import GoogleButton from "@/Components/GoogleButton";
import Image from "next/image";

export default function LoginComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleReady, setGoogleReady] = useState(false);
  const router = useRouter();

  // Check when Google script is loaded
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.google) {
        setGoogleReady(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  async function loginRequest(e) {
    e.preventDefault();

    const data = { email, password };
    console.log(process.env.NEXT_PUBLIC_API_BASE)

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    if(response.ok)
      {
        alert("Login success")
      }

    // alert("Logged In");
    // window.location.href = "/";

  }

  if (!googleReady) return <div className="text-center h-[100vh] mt-20 text-lg">Loading...</div>;

  return (
    <section className="w-full flex h-[90vh]">
      <div className="flex md:w-3/5 w-full h-full md:h-full md:bg-white bg-gray-900">
      
      
      
      
      <form
        className="flex flex-col h-fit w-full md:max-w-[500px] max-w-[400px] mx-auto [margin-top:clamp(100px,8%,200px)] gap-y-8  px-8 py-6 rounded"
        onSubmit={loginRequest}
      >
        <h1 className="text-white text-2xl md:text-4xl md:text-gray-900">Welcome Back!</h1>
        <input
          placeholder="Email"
          className="  w-full max-w-[500px] md:[border:1px_solid_black] [border:1px_solid_white]  px-2 py-2 md:text-gray-900 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          className=" w-full max-w-[500px] md:[border:1px_solid_black] [border:1px_solid_white] px-2 py-2 md:text-gray-900 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col gap-y-2 w-full">
          <button className="button2 bg-black text-white">Login</button>
          <GoogleButton />
          <a className="text-blue-700 text-sm cursor-pointer hover:text-blue-500 mx-auto" href="/CreateAccount">New? Click to register.</a>
        </div>
      </form>
      </div>
      <img className="w-2/5 min-w-[500px] md:block hidden " src="/login.jpg"/>
      <div className="md:bg-white md:w-2/5 hidden relative">
      


      
      </div>
    </section>
  );
}
