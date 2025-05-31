
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getUserFromToken } from "@/lib/auth";
import AdminOrderComp from '@/Components/AdminOrderComp';

export default async function CreateTicketPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const user = await getUserFromToken(token); 

  if (!user || user.role !== 'admin') {
    redirect('/unauthorized');
  }


 

  return (
 
        <AdminOrderComp/>
          



  ) 
}


