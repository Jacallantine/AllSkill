

import Image from "next/image"
import { getUserFromToken } from "@/lib/auth";
import "../app/CSS/Nav.css";
import MobileNav from "./MobileNav";
export default async function Navbar()
{
  const user = await getUserFromToken(); 
        let links = []

        if(!user || user.role === null){


        
        links = [
          {"content":"Home", "href":"/"},
          {"content":"PC-Opti", "href":"/PcOpti"},
          {"content":"PC-Build", "href":"/PcBuild"},
          {"content":"Internet", "href":"/Internet"},
          {"content":"Controller", "href":"/Controller"},
          {"content":"Login", "href":"/Login"},
        ]}

        else{
          if(user.role === 'cust')
          {
            links = [
          {"content":"Home", "href":"/"},
          {"content":"PC-Opti", "href":"/PcOpti"},
          {"content":"PC-Build", "href":"/PcBuild"},
          {"content":"Internet", "href":"/Internet"},
          {"content":"Controller", "href":"/Controller"},
          {"content":`${user.firstName}`, "href":"/Profile"}
        ]
          }
          if(user.role === 'admin')
            {
              links = [
            {"content":"Home", "href":"/"},
            {"content":"PC-Opti", "href":"/PcOpti"},
            {"content":"PC-Build", "href":"/PcBuild"},
            {"content":"Internet", "href":"/Internet"},
            {"content":"Controller", "href":"/Controller"},
            {"content":`${user.firstName}`, "href":"/Profile"},
            {"content":"Admin", "href":"/Admin"},
          ]
            }}

        

 
  return (
        <nav className="w-full flex flex-col-reverse text-black md:bg-gray-900 shadow-lg">
          <MobileNav links={links}/>
        <div className="md:flex hidden h-[80px] bg-white px-24  justify-between md:bg-white shadow  [border-bottom:1px_solid_black]">
         <ul className=" bg-white h-full flex">
         {links.map((link, index) => (
          <li key={index} className="w-fit h-full">
            <a
              href={link.href}
              className="cursor-pointer font-semibold px-2 h-full flex items-center hover:bg-[rgba(0,0,0,0.8)] hover:text-white transition duration-300"
            >
              {link.content}
            </a>
          </li>
        ))}


                </ul>
            <div className="px-2  [transition:300ms] h-full flex items-center ">
            <a href="/Cart">
            <Image src="/shoppingcart.svg" alt="Shopping Cart Icon" width={30} height={30} className="cursor-pointer group-hover:fill-white "/>
            </a>
            </div>
            
        
        </div>
           
            <div className="md:flex hidden justify-end px-24  text-white socialLinks">
                <a target="_new" href="https://x.com/LookitsAllSkill" className="cursor-pointer px-2 py-1"><Image src="/twitter.svg" alt="Twitter Icon" width={35} height={35}/></a>
                <a className="cursor-pointer px-2 py-1"><Image src="/discord.svg" alt="Twitter Icon" width={35} height={35}/></a>

            
            </div>

            
        </nav>        

    )
}