export default function AdminSideBar()
{
    return(
        <div className="w-[400px] bg-[#3C4043] h-full text-white flex flex-col items-center py-12">
            <h2 className="md:text-4xl">Admin Tools</h2>
            <div className="w-full">
            <a href="/Admin/CreateOrder" className="cursor-pointer w-full flex justify-center transition duration-300 hover:bg-white hover:text-black py-2" >Create Ticket</a>

            
            
            </div>
        
        
        
        </div>


    )
}