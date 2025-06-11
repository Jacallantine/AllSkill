
"use client";
import Internet from "@/app/Internet/page";
import { useState, useEffect, use } from "react";


export default function AdminOrderComp({service})
{
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0)
    const [email, setEmail] = useState("")
    const [internetId, setInternetId] = useState(service.internet[0].id ?? "")
    const [internetPrice, setInternetPrice] = useState(service.internet[0].price ?? "")
    const [pcOptiId, setPcOptiId] = useState(service.pcOpti[0].id ?? "")
    const [pcOptiPrice, setPcOptiPrice] = useState(service.pcOpti[0].price ?? "")
    const [social, setSocial] = useState("")


    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem("admincart") || "[]");
        setItems(storedItems)

        const calculatedTotal = storedItems.reduce((sum, item) => sum + item.price, 0);
        setTotal(calculatedTotal)
    }, []);



    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem("admincart") || "[]");
        const calculatedTotal = storedItems.reduce((sum, item) => sum + Number(item.price), 0);
        setTotal(calculatedTotal)
    }, [items]);

    function removeItem(i)
    {
        let updatedItems = [...items]
        updatedItems.splice(i, 1)
        sessionStorage.setItem("admincart", JSON.stringify(updatedItems));
        setItems(updatedItems)
    }


    async function CreateTicket()
    {
        if(!email || !social)
            {
                return alert("Please fill in all fields")
            }
        const cart = JSON.parse(sessionStorage.getItem("admincart") || "[]");
     


        const pc = cart.find(item => item.service === "Custom PC")?.pc;
        const internet = cart.find(item => item.service === "Internet Opti")?.id;
        const pcOpti = cart.find(item => item.service === "Pc Opti")?.id;

        const data = {
            email,
            social,
            ...(internet && { InternetId : internetId }),
            ...(pcOpti && { PcOptiId : pcOptiId }),
            ...(pc && {
              pc: {
                cpuId: pc.cpu?.id,
                gpuId: pc.gpu?.id,
                ramId: pc.ram?.id,
                moboId: pc.mobo?.id,
                psuId: pc.psu?.id,
                caseId: pc.pcCase?.id,
                storageId: pc.storage?.id
              }
            })
          };
          
       
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin/tickets/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            credentials:"include",
            body: JSON.stringify(data)
          });
      
          if (!response.ok) {
            throw new Error("Error, Try again");
          }
          else{
            alert("Ticket Created")
            router.push('/Admin');
          } 
          
          sessionStorage.clear()
    }





    const addToCart = (id, name, price, ) => {
       
        const currentCart = JSON.parse(sessionStorage.getItem("admincart") || "[]");
        const newItem = { service: `${name}`, price: `${price}`, id : id};
        let updatedItems = [...currentCart, newItem]
        sessionStorage.setItem("admincart", JSON.stringify(updatedItems));
        setItems(updatedItems)
    };
    return <section className="w-full flex md:flex-row flex-col h-[90vh]">
    <div className="text-white md:text-black md:py-24 md:px-10 md:bg-white bg-slate-500 pb-12 pt-24">
    <h1 className="text-4xl mx-auto w-fit mb-5">${total}</h1>
    
    {
        items.length === 0? (
            
            <div className="flex flex-col gap-y-4">
                <h1 className="text-xl text-center">You have nothing in the cart. </h1>

            </div>
            
           



        ):
        
        
        ( 
            <div className="h-[500px]">
            <ul className="flex flex-col gap-y-5 overflow-y-scroll h-5/6">
        {items.map((item, index) => (

            <li key={index} className="flex justify-between items-center px-8 gap-x-5"><span className="flex items-center gap-x-12 text-xl">{item.service} - ${item.price}    </span><button  onClick={()=>{removeItem(index)}} className="remove" >Remove</button></li> 
        ))}
    </ul>

        <button 
        className="w-full max-w-[300px] text-white md:[transition:300ms] [border:2px_solid_transparent] hover:[border:2px_solid_rgba(23,107,239,1)] flex items-center justify-center mx-auto gap-x-2 bg-[rgba(23,107,239,1)] px-12 py-2 active:bg-white active:text-[rgba(23,107,239,1)] cursor-pointer hover:bg-white hover:text-[rgba(23,107,239,1)] " 
        onClick={()=>CreateTicket()}
        >Add Ticket</button>
        </div>
    )

    }
    
    
    
    
    </div>
        <div className=" mx-auto max-w-[900px] flex flex-col gap-y-6 md:py-24 py-12">
        <div className="mx-auto flex flex-col gap-y-3">
        <h1 className="text-4xl mx-auto">Admin's Custom Order.</h1>
        <h2 className="text-2xl mx-auto">This is for ALLSKILL workers ONLY.</h2>
        </div>
        
        <p className="mx-auto">Input customer information below.</p>
        <input className="w-[400px]  mx-auto border 1 white px-4 py-3" placeholder="Input Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <input  className="w-[400px] mx-auto border 1 white px-4 py-3" placeholder="Input Contact Information (customers)" value={social} onChange={(e)=>setSocial(e.target.value)} required/>

        <button onClick={() => addToCart(internetId, "Internet Opti", internetPrice) } className=" w-full md:[transition:300ms] [border:2px_solid_transparent] flex items-center justify-center gap-x-2 bg-[rgba(23,107,239,1)_!important] py-2  cursor-pointer hover:[background:white_!important] hover:[color:rgba(23,107,239,1)_!important] mx-0 [width:100%_!important] [font-weight:400_!important]"><span className="text-3xl">+</span> Add Internet</button>
        
        <button onClick={() => addToCart(pcOptiId, "Pc Opti", pcOptiPrice)} className="w-full md:[transition:300ms] [border:2px_solid_transparent] flex items-center justify-center  gap-x-2 bg-[rgba(23,107,239,1)_!important] px-12 py-2    cursor-pointer hover:[background:white_!important] hover:[color:rgba(23,107,239,1)_!important] hover:text-[rgba(23,107,239,1)] [width:100%_!important] [font-weight:400_!important]"><span className="text-3xl">+</span> Add PC Opti</button>
        <a href="/Admin/CreateOrder/CustomPc" className="w-full [border-radius:0.5rem] justify-center md:[transition:300ms] [border:2px_solid_transparent] flex items-center mx-auto gap-x-2 bg-[rgba(23,107,239,1)] px-12 py-2  cursor-pointer hover:bg-white hover:text-[rgba(23,107,239,1)]"><span className="text-3xl">+</span> Custom PC</a>
        
        </div>
        
    
    
    </section>
}
