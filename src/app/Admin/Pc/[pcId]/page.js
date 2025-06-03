// File path: app/Admin/Pc/[pcId]/page.tsx
export default async function PcDetailPage({ params }) {
  const { pcId } = await params; // no need to `await params`

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/pc/${pcId}`, {
    credentials: "include", // if cookie auth is being used
  });

  if (!res.ok) {
    return <p className="text-red-500 text-center mt-10">PC not found</p>;
  }

  const pc = await res.json();
  console.log(pc)

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
