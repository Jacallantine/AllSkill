"use client";
import { useEffect, useState } from "react";
import BaseComp from "./EditComp/BaseComp";
import "../app/CSS/Buttons/categories.css"

export default function AddPcComponent({ comps: initial }) {
  const [comps, setComps] = useState(initial); 
  const [expanded, setExpanded] = useState({}); 
  const [edit, setEdit] = useState({ index: null, category: null }); 
  const [updateComp, setUpdateComp] = useState({})
  const [EditorAdd, setEditorAdd] = useState("")



  function toggleCategory(category) {
    setExpanded(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  }


        useEffect(()=>{
                if(edit.index !== null && edit.category !== null)
                    {
                        let i = edit.index
                        let category = edit.category  
                        let comp = comps[category]
                        let compOb = comp[i]
                        setUpdateComp({compOb, category})
                        setEditorAdd("editButton")
                        console.log("test",EditorAdd)

                    }
               



            },[edit])







  return (
    <div className="space-y-6 flex h-full">
    <div className="flex flex-col w-full max-w-[350px] h-full bg-white overflow-y-auto">
      <h1 className="md:text-3xl text-center py-6 text-black italic font-bold">Edit Parts</h1>
    
    
      {Object.entries(comps).map(([category, items]) => (
        <div key={category} className=" flex flex-col w-full bg-white text-black categories " >
          <button
            className="uppercase cursor-pointer"
            onClick={() => toggleCategory(category)}
          >
           {category}
          </button> 

          {expanded[category] && (
            <ul className=" flex flex-col w-full">
              {items.map((item, index) => {
                const isSelected = edit.index === index && edit.category === category;

                return (
                  <li
                    key={index}
                    onClick={() => setEdit({ index, category })}
                    className={`flex w-full justify-center cursor-pointer py-2  list-none hover:bg-white transition 300 duration-300 hover:text-black ${
                      isSelected ? "bg-gray-900 text-white hover:bg-gray-900 " : ""
                    }`}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      ))}
        </div>
      <div className="w-full h-full">
        <BaseComp comp={updateComp} update={EditorAdd}/>
      
      
      </div>
    </div>
  );
}
