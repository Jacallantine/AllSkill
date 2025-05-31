import PcComponent from "@/Components/PcComponent"
import PcCard from "@/Components/PcCard";
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


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/CustomPc`);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const items = await res.json();
  console.log(items)
    


    return(<section className="h-[90vh]">
        <PcComponent items={items}/>
        </section>
            


    )
}