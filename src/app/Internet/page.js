"use client";
import Card from "@/Components/Card"
import PriceCard from "@/Components/PriceCard";

export default function Internet()
{

    return <section className="w-full md:py-32 py-42 px-12">
        <div className=" mx-auto max-w-[900px] flex flex-col gap-y-32">
        <div className="flex flex-col gap-y-8">
         <h1 className="flex md:mx-0 mx-auto text-4xl italic">Internet Optimization</h1>
        <p> Our Internet Optimization service helps you get the best performance from your network, whether you're gaming, streaming, or working from home. We analyze and configure your setup to reduce lag, improve speed, and eliminate connection drops. Choose the option that best fits your setup — or skip the wait with our priority service.
        </p>
        
        </div>
       

        <div className="flex flex-wrap gap-6 gap-y-8 ">

        <h1 className="italic text-4xl text-center md:text-left">Reviews:</h1>
        
        <div className="flex flex-wrap w-full justify-center gap-6">
        <Card name={"Arcitys"} image={"/arcity.jpg"} vouch={"Had many opti’s before but now the only person I let touch my PC/Internet is AllSkill, huge vouch for his services."}/>
        <Card name={"Biffle"} image={"/biffle.jpg"} vouch={"PC and Internet Optimization, i'm shooting nukes against hackers now."}/>
        <Card name={"Blazt"} image={"/blazt.jpg"} vouch={"Huge vouch for AllSkill and his team, got his internet Opti which made me fry."}/>
        
        
        </div>
        
        
        
        
        </div>
        <div className="flex flex-col gap-y-8  ">
        <h1 className="italic text-4xl md:text-left text-left">Pricing:</h1>
        
        <div className="flex flex-wrap justify-center gap-6 ">
        <PriceCard name={"Console"} price={35} service={"Internet"} description = {"This is optimization is for only consoles. NO REFUNDS."}/>
        <PriceCard name={"PC"} price={45} service={"Internet"} description = {"This is optimization is for only PC's. NO REFUNDS."}/>
        <PriceCard name={"Skip The Line"} price={90} service={"Internet"} description = {"Buy this to skip the wait and get the opti fast. NO REFUNDS."}/>
        
        </div>
        
        </div>
       </div>
        
    
    
    </section>
}