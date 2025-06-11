"use client";
import { useState, useEffect } from "react";
import "../../app/CSS/EditCompForm.css"
export default function BaseComp({comp, selected:update})
{
        const [Id , setId] = useState(comp?.id ?? "")
        const [Name, setName] = useState(comp?.name ?? "")
        const [Type, setType] = useState(comp?.type ?? "")
        const [Price, setPrice] = useState(comp?.price ?? 0)
        const [Url, setUrl] = useState(comp?.url ?? "")
        const [category, setCategory] = useState(comp?.category ?? "")
        const [Watt, setWatt] = useState(comp?.watt ?? 0)
        const [Rating, setRating] = useState(comp?.rating ?? "")
        const [IsActive, setIsActive] = useState(comp?.isActive ?? 1)

        const [addName, addSetName] = useState("")
        const [addType, addSetType] = useState("")
        const [addPrice, addSetPrice] = useState(0)
        const [addUrl, addSetUrl] = useState("")
        const [addWatt, addSetWatt] = useState(0)
        const [addRating, addSetRating] = useState("")
    




        const [selected, isSelected] = useState(update ?? "editButton")
        const [selectedType, setSelectedType] = useState("");

        function handleChange(e) {
          setSelectedType(e.target.value);
        }

        function handleActive(e) {
          setIsActive(parseInt(e.target.value));
        }

        useEffect(() => {
            if (comp) {
              setId(comp.compOb?.id)
              setName(comp.compOb?.name ?? "");
              setType(comp.compOb?.type ?? "");
              setPrice(comp.compOb?.price ?? "");
              setUrl(comp.compOb?.url ?? "");
              setWatt(comp.compOb?.watt ?? "");
              setRating(comp.compOb?.rating ?? "");
              setCategory(comp?.category ?? "")
              setIsActive(comp.compOb?.isActive ?? 1)
            }
          }, [comp]);
          // useEffect(() => {
         
          //       if(selected === "addButton")
          //           {
          //             console.log
          //               setId("")
          //               setName("");
          //               setType("");
          //               setPrice(0);
          //               setUrl("");
          //               setWatt(0);
          //               setRating("");
          //               setIsActive(1);

          //           }

                
              
       
          // }, [selected]);

        async function updateComp(e)
        {
            e.preventDefault()
            const data = { Id, Name, Type, Price, Url, IsActive,   ...(Rating !== undefined && { Rating }), ...(Watt !== undefined && { Watt }) };
            console.log(data.IsActive)
            console.log(category)
      

          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/edit${category}`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
      
          if (!response.ok) {
            throw new Error("Error, Try again");
          }
          else{
            alert("Success")
           
          }
            

        }



        async function addComp(e)
        {
            e.preventDefault()
            const data = { Name : addName, Type : addType, Price : addPrice, Url : addUrl,  ...(addRating !== undefined && { Rating :addRating }), ...(addWatt !== undefined && { Watt : addWatt }) };
            console.log(data)
            console.log(category)
      

          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/add${selectedType}`, {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
      
          if (!response.ok) {
            throw new Error("Error, Try again");
          }
          else{
            alert("Success")
           
          }
            

        }

        return (

            <div className="flex w-full h-full bg-gray-900 flex-col ">
            <div className="mx-auto flex">
            <button
              className={`px-8 py-2 cursor-pointer ${
                selected === "editButton" ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
              onClick={() => isSelected("editButton")}
            >
              Edit
            </button>
      
            <button
              className={`px-8 py-2 cursor-pointer ${
                selected === "addButton" ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
              onClick={() => isSelected("addButton")}
            >
              Add
            </button>
          </div>
             {selected === "addButton" ? (<form className="flex mx-auto mt-[10%] flex-col editCompForm " onSubmit={(e) => addComp(e)}>
             <h1 className="text-2xl">Add Component</h1>

             <div className="flex gap-x-4">
                <div className="flex gap-x-2">
                    <label htmlFor="cpu">CPU</label>
                    <input type="radio" id="cpu" name="componentType" value="cpu" onChange={handleChange} required />
                </div>

                <div className="flex gap-x-2">
                    <label htmlFor="gpu">GPU</label>
                    <input type="radio" id="gpu" name="componentType" value="gpu" onChange={handleChange} required  />
                </div>

                <div className="flex gap-x-2">
                    <label htmlFor="psu">PSU</label>
                    <input type="radio" id="psu" name="componentType" value="psu"  onChange={handleChange} required />
                </div>

                <div className="flex gap-x-2">
                    <label htmlFor="ram">Ram</label>
                    <input type="radio" id="ram" name="componentType" value="ram"  onChange={handleChange} required />
                </div>

                <div className="flex gap-x-2">
                    <label htmlFor="mobo">Mobo</label>
                    <input type="radio" id="mobo" name="componentType" value="mobo"  onChange={handleChange} required />
                </div>


                <div className="flex gap-x-2">
                    <label htmlFor="case">Case</label>
                    <input type="radio" id="case" name="componentType" value="case"  onChange={handleChange} required />
                </div>

                <div className="flex gap-x-2">
                    <label htmlFor="case">Storage</label>
                    <input type="radio" id="case" name="componentType" value="storage"  onChange={handleChange} required />
                </div>
                </div>

             <div className="flex gap-x-6">
             
             
             
             
             
             <div className="flex flex-col w-full"> 
             <label>Name:</label>
             <input value={addName} onChange={(e) => addSetName(e.target.value)} placeholder="Name" />
             </div>
             <div className="flex flex-col w-full"> 
             <label>Price:</label>
             <input value={addPrice} onChange={(e) => addSetPrice(e.target.value)} placeholder="Price"  type="number" />
             </div>
             </div>



             
             {
                selectedType === "psu" ? (
             <div className="flex gap-x-6">
             <div className="flex flex-col w-full">
             <label>Watt</label>
             <input value={addWatt} onChange={(e) => addSetWatt(e.target.value)} placeholder="Watt" />
             </div>
             
             <div className="flex flex-col w-full">
             
             
            
             <label>Rating:</label>
             <input value={addRating} onChange={(e) => addSetRating(e.target.value)} placeholder="Rating" />
              </div></div> ) :("")

             }
             <label>Type:</label>
             <input value={addType} onChange={(e) => addSetType(e.target.value)} placeholder="Type" />
            
             <label>Url:</label>
             <input value={addUrl} onChange={(e) => addSetUrl(e.target.value)} placeholder="Image URL" />
             <button className="px-4 py-2 bg-black text-white transition duration-300 hover:bg-white hover:text-black cursor-pointer border 1 transparent">Add Part</button>
           </form>)
           
           :(category === "psu" ? (
                <form className="flex mx-auto mt-[10%] flex-col editCompForm " onSubmit={(e) => updateComp(e)}>
                  <h1 className="text-2xl">Edit PSU</h1>
                  <div className="flex gap-x-6">
                  
                 
                  <div className=" flex flex-col">
                  <label>Name:</label>
                  <input value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                  
                  </div>
                  <div className="flex flex-col">
                  <label>Price:</label>
                  <input value={Price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" type="number" />
                  
                  </div>
                   </div>
                 
                  <label>Watt</label>
                  <input value={Watt} onChange={(e) => setWatt(Number(e.target.value))} placeholder="Watt" />
                  <label>Rating:</label>
                  <input value={Rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />
                  <label>Url:</label>
                  <input value={Url} onChange={(e) => setUrl(e.target.value)} placeholder="Image URL" /> 
                  <div className="flex justify-between ">
                  
                  
                  
               
                      <div className="flex gap-x-2">
                    <label htmlFor="active">Activate</label>
                    <input type="radio" id="active" name="componentType" value={1}  onChange={handleActive}  required  />
                    </div>
                
                    <div className="flex gap-x-2">
                    <label htmlFor="deactivate">Deactivate</label>
                    <input type="radio" id="deactivate" name="componentType" value={0}  onChange={handleActive} required />
                    </div>
               
                
                 </div>
                  <button className="px-4 py-2 bg-black text-white transition duration-300 hover:bg-white hover:text-black cursor-pointer border 1 transparent">Update</button>
                </form>
              ) : (
                <form className="flex flex-co mx-auto mt-[10%] editCompForm" onSubmit={(e) => updateComp(e)}>
                  <h1 className="text-2xl">Edit {Name}</h1>


                  <div className="flex gap-x-6">
                  
                 
                  <div className=" flex flex-col w-full">
                  <label>Name:</label>
                  <input value={Name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                  
                  </div>
                  <div className="flex flex-col w-full">
                  <label>Price:</label>
                  <input value={Price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" type="number" />
                  
                  </div>
                   </div>
        

                
                  <label>Type:</label>
                  <input value={Type} onChange={(e) => setType(e.target.value)} placeholder="Type" />
                  <label>Url:</label>
                  <input value={Url} onChange={(e) => setUrl(e.target.value)} placeholder="Image URL" />

                  <div className="flex justify-between ">
                  
                  
                  <div className="flex gap-x-2">
                    <label htmlFor="active">Activate</label>
                    <input type="radio" id="active" name="componentType" value={1}  onChange={handleActive} checked={IsActive === 1} required />
                </div>

                <div className="flex gap-x-2">
                    <label htmlFor="deactivate">Deactivate</label>
                    <input type="radio" id="deactivate" name="componentType" value={0}  onChange={handleActive}  checked={IsActive === 0} required />
                </div>
                 </div>

                  <button className="px-4 py-2 bg-black text-white transition duration-300 hover:bg-white hover:text-black cursor-pointer border 1 transparent">Update</button>
                </form>
              ))}
              {}
            </div>
          );
          

}