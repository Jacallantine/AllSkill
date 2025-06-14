

import Image from "next/image"
import { getUserFromToken } from "@/lib/auth";
import "../app/CSS/Nav.css";
import MobileNav from "./MobileNav";
export default async function Navbar()
{
  const user = await getUserFromToken(); 
        let links = []
        let adminLinks = []

        if(!user || user.role === null){


        
        links = [
          {"content":"Home", "href":"/"},
          {"content":"PC-Opti", "href":"/PcOpti"},
          {"content":"PC-Build", "href":"/PcBuild"},
          {"content":"Internet", "href":"/Internet"},
          // {"content":"Controller", "href":"/Controller"},
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
          // {"content":"Controller", "href":"/Controller"},
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
            // {"content":"Controller", "href":"/Controller"},
            {"content":`${user.firstName}`, "href":"/Profile"},
            // {"content":"Admin", "href":"/Admin"},
          ]

          adminLinks = [
            {"content":"Tickets", "href":"/Admin"},
            {"content":"Create Ticket", "href":"/Admin/CreateOrder"},
            {"content":"Custom PC", "href":"/Admin/CreateOrder/CustomPc"},
            {"content":"Edit Parts", "href":"/Admin/EditPart"},
          ]
            }}

        

 
  return (
        <nav className="w-full flex md:flex-col flex-col-reverse text-black md:bg-gray-900 shadow-lg">
          <MobileNav links={links}/><div className="md:flex hidden justify-end px-24  text-white socialLinks">
                <a target="_new" href="https://x.com/LookitsAllSkill" className="cursor-pointer px-2 py-1"><Image src="/twitter.svg" alt="Twitter Icon" width={35} height={35}/></a>
                <a className="cursor-pointer px-2 py-1"><Image src="/discord.svg" alt="discord" width={35} height={35}/></a>

            
            </div>
        <div className="md:flex hidden h-[80px] bg-white px-24  justify-between md:bg-white shadow  [border-bottom:1px_solid_black]">
        
         <ul className=" bg-white h-full flex">
         {links.map((link, index) => (
          <li key={index} className="w-fit h-full">
            <a
              href={link.href}
              className="cursor-pointer font-semibold px-2 h-full flex items-center "
            >
              <span className="relative z-50">{link.content}</span>
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
        {adminLinks && adminLinks.length > 0 && (
          <ul className="flex md:flex hidden h-[50px] px-24 shadow [border-bottom:1px_solid_black]">
            {adminLinks.map((link, index) => (
              <li key={index} className="w-fit h-full">
                <a
                  href={link.href}
                  className={`px-4 adminLinks cursor-pointer font-semibold h-full flex items-center hover:bg-white hover:text-black text-white transition duration-300 ${
                    index === adminLinks.length - 1 ? 'last' : ''
                  }`}
                >
                  {link.content}
                </a>
              </li>
            ))}
          </ul>
        )}
        
            

            
        </nav>        

    )
}