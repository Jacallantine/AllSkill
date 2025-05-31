"use client";
import PcCard from "./PcCard";
import { useState } from "react";

export default function PcComponent({ items }) {
    const [selected, setSelected] = useState("storage");

    // Mapping from button label to actual data
    const componentMap = {
        gpu: items.gpu,
        cpu: items.cpu,
        ram: items.ram,
        pcCase: items.pcCase,
        storage: items.storage,
    };

    return (
        <section className="p-4 flex">
            <div className="flex flex-col gap-2 mb-4 w-2/6">
                {items.gpu.length === 0 ? (
                    <p>You have no GPUs</p>
                ) : (
                    <button onClick={() => setSelected("gpu")}>GPUs</button>
                )}

                {items.cpu.length === 0 ? (
                    <p>You have no CPUs</p>
                ) : (
                    <button onClick={() => setSelected("cpu")}>CPUs</button>
                )}

                {items.ram.length === 0 ? (
                    <p>You have no RAM</p>
                ) : (
                    <button onClick={() => setSelected("ram")}>RAM</button>
                )}

                {items.pcCase.length === 0 ? (
                    <p>You have no CASEs</p>
                ) : (
                    <button onClick={() => setSelected("pcCase")}>Case</button>
                )}

                {items.storage.length === 0 ? (
                    <p>You have no Storage</p>
                ) : (
                    <button onClick={() => setSelected("storage")}>Storage</button>
                )}
            </div>

            <div className="flex justify-center">
                {selected && (
                    <div className="flex gap-10">
                        <h2 className="font-bold mb-2">
                            {selected.toUpperCase()}
                        </h2>
                        {componentMap[selected].map((item, i) => (
                            <PcCard name={item.name} price={item.price}/>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
