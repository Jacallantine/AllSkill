export default async function PcDetailPage({ params }) {
  const { pcId } = await params; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/pc/${pcId}`, {
    credentials: "include",
    cache: "no-store", 
  });

  let pc = null;

  if (res.ok) {
    try {
      pc = await res.json();
    } catch (err) {
      console.error("Failed to parse PC JSON:", err);
    }
  } else {
    console.error(`API responded with ${res.status}`);
  }

  if (!pc) {
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
          <p>CASE: {pc.case?.name}</p>
          <p>MOBO: {pc.mobo?.name}</p>
          <p>CPU: {pc.cpu?.name}</p>
          <p>GPU: {pc.gpu?.name}</p>
          <p>PSU: {pc.psu?.name}</p>
          <p>Storage: {pc.storage?.name}</p>
        </div>
      </div>
    </section>
  );
}
