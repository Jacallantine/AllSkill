"use client";
import PcCard from "./PcCard";
import "../app/CSS/Buttons/categories.css"
import { useState } from "react";

export default function PcComponent({ items }) {
    const [selected, setSelected] = useState("storage");

    const finalizePcBuild = () => {
        const cartRaw = sessionStorage.getItem("admincart");
        let adminCart = cartRaw ? JSON.parse(cartRaw) : [];
    
        const pcBuild = JSON.parse(sessionStorage.getItem("pcBuild") || "{}");
    
        const totalPrice = [
            pcBuild.cpu,
            pcBuild.gpu,
            pcBuild.pcCase,
            pcBuild.ram,
            pcBuild.storage,
            pcBuild.mobo,
            pcBuild.psu
        ]
            .filter(Boolean)
            .reduce((sum, part) => sum + Number(part.price), 0);
    
        const newCartItem = {
            service: "Custom PC",
            price: totalPrice,
            pc: pcBuild
        };
    
        adminCart.push(newCartItem);
        sessionStorage.setItem("admincart", JSON.stringify(adminCart));
        console.log(cartRaw)
    
        alert("Custom PC added to cart!");
    };
    
    
    const componentMap = {
        gpu: items.gpu,
        cpu: items.cpu,
        ram: items.ram,
        psu: items.psu,
        mobo : items.mobo,
        pcCase: items.pcCase,
        storage: items.storage,
    };

    return (
        <section className=" flex h-[90vh] w-full">
            <div className="gap-y-6 flex flex-col mb-4 w-full max-w-[350px] bg-white">
                <h1 className="md:text-3xl text-center py-6 text-black italic font-bold">Part Picker</h1>
                <div className="flex flex-col">
                
                {items.gpu.length === 0 ? (
                    <p>You have no GPUs</p>
                ) : (
                    <button className="categories" onClick={() => setSelected("gpu")}>GPUs</button>
                )}

                {items.cpu.length === 0 ? (
                    <p>You have no CPUs</p>
                ) : (
                    <button className="categories" onClick={() => setSelected("cpu")}>CPUs</button>
                )}

                {items.ram.length === 0 ? (
                    <p>You have no RAM</p>
                ) : (
                    <button className="categories" onClick={() => setSelected("ram")}>RAM</button>
                )}
                {items.mobo.length === 0 ? (
                    <p>You have no RAM</p>
                ) : (
                    <button className="categories" onClick={() => setSelected("mobo")}>Mother Boards</button>
                )}

                {items.pcCase.length === 0 ? (
                    <p>You have no CASEs</p>
                ) : (
                    <button className="categories" onClick={() => setSelected("pcCase")}>Case</button>
                )}

                {items.storage.length === 0 ? (
                    <p>You have no Storage</p>
                ) : (
                    <button className="categories" onClick={() => setSelected("storage")}>Storage</button>
                )}

                {items.psu.length === 0 ? (
                    <p>You have no Power Supplies</p>
                ) : (
                    <button className="categories" onClick={() => setSelected("psu")}>Power Supplies</button>
                )}
                
                
                </div>
                

                <button onClick={finalizePcBuild} className="transition duration-300 border 2 white hover:bg-white hover:text-gray-900 py-3 w-full max-w-[200px] mx-auto cursor-point bg-gray-900 text-white cursor-pointer">Submit</button>
            </div>

            <div className="flex justify-center w-full">
                {selected && (
                    <div className="flex flex-col p-12">
                        <h2 className="font-bold italic mb-2 text-4xl text-center">
                            {
                                selected === "pcCase"? ("Pc Case"):( 
                                    selected === "psu"? ("Power Supply") : (

                                        selected === "storage"? ("Storage"):(selected.toUpperCase())
                                     )
                                )
                            
                            }
                        </h2>
                        <div className="flex gap-10"> 
                        
                        {componentMap[selected].map((item, i) => (
                            <PcCard key={item.id}
                            id={item.id}
                            name = {item.name}
                            price={item.price}
                            partType={selected}
                            items={componentMap[selected]}/>
                        ))}
                        
                        </div>
                        
                    </div>
                )}
            </div>
        </section>
    );
}
