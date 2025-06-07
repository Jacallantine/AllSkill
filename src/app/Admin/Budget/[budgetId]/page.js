export default async function PcDetailPage({ params }) {
    const { budgetId } = await params; 
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/budget/${budgetId}`, {
      credentials: "include",
      cache: "no-store", 
    });
  
    let budget = null;
  
    if (res.ok) {
      try {
        budget = await res.json();
        console.log(budget)
      } catch (err) {
        console.error("Failed to parse PC JSON:", err);
      }
    } else {
      console.error(`API responded with ${res.status}`);
    }
  
    if (!budget) {
      return (
        <section className="flex flex-col items-center justify-center w-full py-32">
          <h1 className="text-3xl text-red-500">Failed to load PC details.</h1>
        </section>
      );
    }
  
    return (
      <section className="flex flex-col items-center justify-center w-full py-32">
        <div className="w-fit flex flex-col">
          <h1 className="text-4xl mb-4">PC SPECS</h1>
          <div className="flex flex-col gap-y-2 text-xl">
          <p>Social:{budget.social}</p>
            <p>Clients Budget:{budget.budget}</p>
           
            <p>Special Request: {budget.specialRequest}</p>
          </div>
        </div>
      </section>
    );
  }
  