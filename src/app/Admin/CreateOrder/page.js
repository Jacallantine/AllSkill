
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getUserFromToken } from "@/lib/auth";
import AdminOrderComp from '@/Components/AdminOrderComp';

export default async function CreateTicketPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const user = await getUserFromToken(token); 
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin/services`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const comps = await res.json();
  console.log("test",comps)

  if (!user || user.role !== 'admin') {
    redirect('/unauthorized');
  }


 

  return (
 
        <AdminOrderComp service={comps}/>
          



  ) 
}


