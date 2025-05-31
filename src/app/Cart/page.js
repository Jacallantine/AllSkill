"use client";
import { useEffect, useState } from "react";

export default function Cart() {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0)
    const [noRefund, setNoRefund] = useState(1)
    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem("cart") || "[]");
        setItems(storedItems)
        const calculatedTotal = storedItems.reduce((sum, item) => sum + item.price, 0);
        setTotal(calculatedTotal)
    }, []);


    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem("cart") || "[]");
        const calculatedTotal = storedItems.reduce((sum, item) => sum + item.price, 0);
        setTotal(calculatedTotal)
    }, [items]);

    function removeItem(i)
    {
        let updatedItems = [...items]
        updatedItems.splice(i, 1)
        sessionStorage.setItem("cart", JSON.stringify(updatedItems));
        setItems(updatedItems)
    }

    function refundHandler()
    {
        if(noRefund === 0)
            {
                setNoRefund(1)
            }
        else
        {
            setNoRefund(0)
        }
    }

    return (
        <section className="p-4 w-full gap-y-8 flex md:flex-row flex-col justify-around py-24 relative">
        <div className={` ${noRefund === 0? "hidden":"norefunds"} text-white `}>
        
        
        <h1>NO REFUNDS</h1>
            <button onClick={refundHandler} className="absolute top-[10%] right-[10%] text-2xl cursor-pointer hover:bg-white hover:text-black rounded-4xl px-2 [transition:300ms]">X</button>
            <p>There are no refunds. All purchases are final.</p>
            <button></button>
        
    
                   
        </div>

        <div className="flex flex-col md:w-3/5">
            <h1 className="text-3xl mb-2 bg-white text-black py-2 px-3">Your Cart</h1>
            <div className=" text-black bg-white py-4">
            {
                    items.length === 0? (
                        
                        <div className="flex flex-col gap-y-4">
                            <h1 className="text-xl text-center">You have nothing in your cart. </h1>
                            <a href="/Internet" className=" text-white flex justify-center hover:[border:2px_solid_blue-700] mx-auto w-[300px] md:mx-auto default bg-blue-700 hover:bg-white hover:text-blue-700 md:[transition:300ms]">Click Here</a>

                        </div>
                        
                       



                    ):
                    
                    
                    ( <ul className="flex flex-col gap-y-4">
                    {items.map((item, index) => (
                    
                        <li key={index} className="flex justify-between items-center px-8"><span className="flex items-center gap-x-12 text-xl"> <img src={item.image} className="w-[100px] h-[100px]"/>{item.service} - ${item.price}    </span><button  onClick={()=>{removeItem(index)}} className="remove" >Remove</button></li> 
                    
                    ))}
                </ul>)

                }
            
            
            </div>
                
        
        </div>
            
            
        <div className="flex flex-col gap-y-3 items-center">
        <h1 className="text-3xl ">Order Summary</h1>
            <input placeholder="Email" required className="w-[300px] bg-white text-black px-3 py-1"/>
            <input placeholder="Enter Address" required className="w-[300px] bg-white text-black px-3 py-1"/>
            <input placeholder="Best way to contact (Twitter)" required className="w-[300px] bg-white text-black px-3 py-1"/>
            <div className="flex w-full px-4 md:justify-between justify-around [border-bottom:1px_solid_white] py-2"><p className="text-lg">Total</p><p className="text-xlg">${total}</p></div>
            
            <button className=" mx-auto w-[300px] default md:[transition:300ms] py-2 bg-blue-700 cursor-pointer active:bg-white active:text-blue-700 hover:bg-white hover:text-blue-700" >Checkout</button>
            
            
        </div>

            
         
            
        </section>
    );
}
