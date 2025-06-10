"use client";
import { useState } from "react";


export default function PcBudgetForm()
{

    const [Social, setSocial] = useState("")
    const [Email, setEmail] = useState("")
    const [Price, setPrice] = useState("")
    const [SpecialRequest, setSpecialRequest] = useState("")



    async function addPcBudget(e) {
        e.preventDefault();  

        const data = { "Email":Email, "Social":Social,  PcBudget : {"Budget" : Price, "SpecialRequest":SpecialRequest}};
        console.log(data)

          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/tickets/addbudget`, {
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
            alert("Budget Submitted")
          }
      
      }
    return (

        <div>
        <form className="flex w-fit mx-auto mt-[clamp(200px,10vh,300px)] flex-col editCompForm " onSubmit={(e) => addPcBudget(e)}>
        <h1 className="text-2xl">Submit PC Budget</h1>
        <div className="flex flex-col  gap-y-4">
        
       
        <div className=" flex gap-x-6 ">
        <div className="flex flex-col">
        <label>Email:</label>
        <input value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
        
        </div>
        
        <div className="flex flex-col">
            <label>Social:</label>
        <input value={Social} onChange={(e) => setSocial(e.target.value)} placeholder="Social" required />
            
        </div>
        
        
        
        </div>
        <div className="flex flex-col">
        <label>Price:</label>
        <input value={Price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" type="number" required />
        </div>

        <div className="flex flex-col">
        <label>Special Requests?</label>
        <textarea className="border 1 black w-full px-2 py-1 h-[100px]" placeholder="Enter special requests for your build here." value={SpecialRequest} onChange={(e)=>setSpecialRequest(e.target.value)}/>
        
        </div>
        
        
        
        
       
        
     <button className="px-4 py-2 bg-blue-900 text-white transition duration-300 hover:bg-white hover:text-blue-900 cursor-pointer border 1 transparent">Send</button>
       </div>
     </form>
        
        
        </div>
    )
}