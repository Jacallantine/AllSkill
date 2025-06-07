"use client";
import { useState, useEffect } from "react";

export default function TicketList({tickets : initialTickets, name})
{
    let user = name
    const [tickets, setTickets] = useState(initialTickets)
    console.log(tickets)

    async function claim(id) {
    
        const data = { "Id" : id, "FirstName" : user };
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/tickets/claim`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        });
    
        if (!response.ok) {
          throw new Error("Login failed");
        }
    

    
      }




      async function complete(id) {
    
        const data = { "Id" : id, "FirstName" : user };
        alert("You are about to mark this ticket as complete")
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/tickets/complete`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "include",
        });
    
        if (!response.ok) {
          throw new Error("Error");
        }
        alert("You have completed the ticket ")
    
      }

      function spliceTick(i)
      {
        let updatedTickets = [...tickets]
        let deletedTicket = updatedTickets.splice(i,1)[0];
        setTickets(updatedTickets)

      }

      function claimTicket(i)
      {
        const updatedTickets = tickets.map((ticket, index) =>
            index === i ? { ...ticket, whoClaimed: user, isClaimed : 1 } : ticket
          );
          setTickets(updatedTickets);
      }





    return (<div className="flex flex-col px-4 w-full">
        
        
        
        <h1 className="py-12 md:text-4xl mx-auto italic">Available Tickets</h1>
        <div className="w-full flex flex-col gap-y-4">
        
        
        {
            tickets.map((ticket, i) =>(
                    <div key={i} className="bg-white text-black w-full max-w-[900px] mx-auto p-4 py-8 flex flex-col gap-y-4 rounded ">

                    <div className="flex justify-between">
                        <h1 className="text-xl">Email: {ticket.email}</h1>
                        <p className="text-sm">Ticket Id: {ticket.id}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                                <p className="text-md">Purchased:</p>
                                
                                    { 
                                        ticket.pcOptiId ? <p><strong>Pc Opti</strong></p> : ""
                                    }
                                    { 
                                        ticket.internetId ? <p><strong>Internet Opti</strong></p> : ""
                                    }
                                    { 
                                        ticket.pcId ? <a href={`Admin/Pc/${ticket.pcId}`} className="cursor-pointer px-2 py-1 bg-black text-white flex justify-center hover:bg-white hover:text-black [transition:300ms] [border:1px_solid_transparent] hover:[border:1px_solid_black]">PC</a> : ""
                                    }
                                    { 
                                      ticket.pcBudgetId ? <a href={`Admin/Budget/${ticket.pcBudgetId}`} className="cursor-pointer px-2 py-1 bg-black text-white flex justify-center hover:bg-white hover:text-black [transition:300ms] [border:1px_solid_transparent] hover:[border:1px_solid_black]">PC Budget</a> : ""
                                  }
                                      

                                
                        </div>


                        
                        <p className="text-md">Contact: {ticket.social}</p>
                    </div>
                    <div className="flex items-center gap-x-4 ">

                    {
                      ticket.isClaimed === 1 ? (
                        <div className="flex items-center gap-x-4">
                          <p className="capitalize">Claimed By: {ticket.whoClaimed}</p>
                          {ticket.whoClaimed === name ? (
                            <button
                              className="px-3 py-2 border-1 border-transparent hover:border-indigo-500 bg-indigo-500 transition duration-300 hover:bg-white hover:text-indigo-500 text-white cursor-pointer"
                              onClick={() => {
                                spliceTick(i);
                                complete(ticket.id);
                              }}
                            >
                              Mark Completed
                            </button>
                          ) : null}
                        </div>
                      ) : (
                        <button
                          className="border-1 border-transparent hover:border-blue-500 px-4 py-2 bg-blue-500 text-white cursor-pointer transition duration-300 hover:bg-white hover:text-blue-500"
                          onClick={() => {
                            claimTicket(i);
                            claim(ticket.id);
                          }}
                        >
                          Claim
                        </button>
                      )
                    }
                    
                        
                        
                    </div>
                    

                </div>
                
            ))
        }
        </div>
    </div>
    )

}