"use client";
import Card from "@/Components/Card"

export default function PcOpti()
{
    const addToCart = () => {
        const currentCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
        const newItem = { service: "PcOpti", price: 100, image : "/internet.jpg" };
        sessionStorage.setItem("cart", JSON.stringify([...currentCart, newItem]));
    };
    return <section className="w-full md:py-24 py-32 px-12">
        <div className=" mx-auto max-w-[900px] flex flex-col gap-y-8">
        <h1 className="flex md:mx-0 mx-auto md:text-4xl text-2xl">PC Optimization</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2 className="md:text-4xl text-2xl">Vouches</h2>
        <div className="flex flex-wrap">
        
        <Card name={"Arcitys"} image={"/arcity.jpg"} vouch={"This is example text of what a pro would say"}/>
        
        
        </div>
        <button onClick={addToCart} className="md:[transition:300ms] [border:2px_solid_transparent] flex items-center mx-auto gap-x-2 bg-[rgba(23,107,239,1)] px-12 py-2 [border-radius:20px] active:bg-white active:text-[rgba(23,107,239,1)] cursor-pointer hover:bg-white hover:text-[rgba(23,107,239,1)]"><span className="text-3xl">+</span> Add to cart</button>
        </div>
        
    
    
    </section>
}