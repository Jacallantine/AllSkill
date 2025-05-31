"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import GoogleButton from "@/Components/GoogleButton";

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

    alert("Logged In");
    window.location.href = "/";

  }

  if (!googleReady) return <div className="text-center mt-20 text-lg">Loading...</div>;

  return (
    <section className="w-full flex h-[90vh]">
      <div className="flex  w-full md:w-3/5  h-fit md:h-full md:bg-white">
      
      
      
      
      <form
        className="flex flex-col w-fit mx-auto [margin-top:clamp(100px,8%,200px)] gap-y-8 bg-white px-8 py-6 rounded"
        onSubmit={loginRequest}
      >
        <h1 className="text-black text-2xl md:text-4xl">Welcome Back!</h1>
        <input
          placeholder="Email"
          className="md:w-[350px] w-[200px] [border:1px_solid_black]  px-2 py-2 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          className="md:w-[350px] w-[200px] [border:1px_solid_black] px-2 py-2 text-black"
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
      <div className="md:bg-white md:w-2/5 hidden ">


      
      </div>
    </section>
  );
}
