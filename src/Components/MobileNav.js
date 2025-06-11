"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function MobileNav({links})
{
    const [mobileNav, setMobileNav] = useState(0)
        useEffect(()=>{
            console.log(mobileNav)
        },[mobileNav])

    function mobileNavHandler()
    {
        if(mobileNav === 0)
            {
                setMobileNav(1)
            }
        else{
            setMobileNav(0)
        }
    }
    return (

        <div className=" md:hidden flex flex-col items-center justify-center">
        <img src={"/hamburger.svg"} className="h-[30px] w-[30px] [z-index:1] fixed top-[5%] left-[5%] cursor-pointer" onClick={mobileNavHandler}/>
        <a href="/Cart" className="fixed top-[5%] right-[5%] [z-index:1] ">
        <Image src="/white-cart1.svg" alt="Shopping Cart Icon" width={30} height={30} className="cursor-pointer group-hover:fill-white "/>
        </a>
        <div className={`flex flex-col py-24 items-center mobileNav bg-black h-full w-full ${mobileNav === 0 ? "slideDown" : "slideUp"} gap-y-6`}>
        <h1 className="text-2xl">AllSkillNoTalk</h1>
        
         {
            links.map((link, index)=>(<a className="mobileLinks" key={index} href={link.href}>{link.content}</a>))


        }
     <button onClick={mobileNavHandler} className="mobileLinks cursor-pointer bg-white text-black px-10 py-2 rounded-4xl">X</button>

     <div className="flex w-[150px] justify-around">
       
       
      
        <a target="_new" href="https://x.com/LookitsAllSkill" className="cursor-pointer "><Image src="/twitter.svg" alt="Twitter Icon" width={35} height={35}/></a>
        <a className="cursor-pointer px-2 py-1 "><Image src="/discord.svg" alt="Twitter Icon" width={35} height={35}/></a>

     </div>
    
        </div>
       
      </div>

    )
}