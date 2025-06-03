import TicketList from "@/Components/TicketList";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getUserFromToken } from "@/lib/auth";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const user = await getUserFromToken(); 

  if (!user || user.role !== 'admin') {
    redirect('/unauthorized');
  }


  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/tickets`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error("Failed to fetch tickets");
  }

  const tickets = await res.json();

  return (
    <section className="flex h-[90vh]">
            <TicketList tickets={tickets} name = {user.name}/>
    
    
    
    </section>
          



  ) 
}
