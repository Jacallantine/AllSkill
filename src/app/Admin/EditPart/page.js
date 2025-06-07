import EditPcComponent from '@/Components/EditPcComp';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getUserFromToken } from "@/lib/auth";

export default async function CustomPc()
{
    const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  const user = await getUserFromToken(); 

  if (!user || user.role !== 'admin') {
    redirect('/unauthorized');
  }


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/admin/custompc`,  
    {
      headers: 
      {
        Cookie: cookieStore.toString(),
      },
  
  });

    const comps = await res.json(); 
   console.log(comps) 


    return(<section className="h-[90vh]">
        <EditPcComponent comps={comps}/>
        </section>
            


    )
}