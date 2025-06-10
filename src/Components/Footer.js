import Image from "next/image"
import "../app/CSS/Footer.css"

export default function Footer()
{
    return (<footer className="w-ful py-8 pt-12 flex flex-col gap-y-12">
        <div className="flex w-full max-w-[1000px] mx-auto justify-between flex-col md:flex-row items-center md:items-start gap-y-4">

        <ul className="w-[200px] flex flex-col gap-y-2  items-center">
        <img src="/allskill.jpg" width={100} height={100} className=""/>
        
        </ul>
        <span className="bar"></span>
        <ul className="flex flex-col text-white w-[200px]  items-center">
        <div className="flex flex-col mx-auto gap-y-2 md:items-start items-center">
        <h1 className="md:text-3xl text-2xl">Services</h1>
        <a href="/Internet"><li>Internet Opti</li></a>
        <a href="/PcBuild"><li>PC</li></a>
        <a href="/PcOpti"><li>PC-Opti</li></a>
        
        </div>
        
        
        </ul>
        <span className="bar"></span>

        <ul className="flex flex-col text-white md:gap-y-2 gap-y-1 w-[200px] justify-start items-center">
        <h1 className="md:text-3xl text-2xl ">Contact</h1>
        <div className="flex md:gap-x-4 gap-x-2">
        <a target="_new" href="https://x.com/LookitsAllSkill" className="cursor-pointer px-2 py-1"><Image src="/twitter.svg" alt="Twitter Icon" width={30} height={30}/></a>
        <a className="cursor-pointer px-2 py-1"><Image src="/discord.svg" alt="discord" width={30} height={30}/></a>
        
        </div>   
        
        </ul>
        
        </div>

        <div className="w-full max-w-[1500px] flex justify-between mx-auto  px-4">
            
        <p className="md:text-sm text-[12px] ">@ 2025 AllSkillNoTalk. All Rights Reserved.</p>
        <p className="md:text-sm text-[12px]">Built by Jared Callantine</p>

        </div>
        
        
        
        </footer>

    )
}