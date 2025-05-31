export default async function PcDetailPage({ params }) {
    const { pcId } = await params;
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/pc/${pcId}`);
    const pc = await res.json();
    console.log(pc)
  
    return (
      <section className="flex flex-col items-center justify-center w-full py-32 ">
      <div className="w-fit flex flex-col">
      
      <h1 className="text-4xl mb-4">PC SPECS</h1>
      <div className="flex flex-col gap-y-2">
      <p className="text-xl">CASE: {pc.case.name}</p>
      <p className="text-xl">Mobo: {pc.mobo.name}</p>
      <p className="text-xl">CPU: {pc.cpu.name}</p>
      <p className="text-xl">GPU: {pc.gpu.name}</p>
      <p className="text-xl">PSU: {pc.psu.name}</p>
      <p className="text-xl">Storage: {pc.storage.name}</p>
      

      
      
      
      </div>
      
        
      
      </div>
      
      
      </section>
   
    );
  }
  