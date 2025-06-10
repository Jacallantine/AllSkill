import Image from "next/image";
import Button1 from "@/Components/Buttons/Button1";
import HomeCard from "@/Components/HomeCard";
import Carousel from "@/Components/Carousel";



export default async function Home() {
  const slides = [
    {href:"/champ.jpg", vouch:'"HUGE VOUCH, lowered my ping, hit reg is insane, and my input delay is gone, I highly recommend going to LookitsAllSkill for any pc/internet optimizations best in the bizz."', pro:"-OpTic Mercules" },
    {href:"/esportarena2_.webp", vouch:'"Had many opti’s before but now the only person I let touch my PC/Internet is AllSkill, huge vouch for his services."', pro:"-Arcitys"},
    {href:"/champ3.jpg", vouch:'"Had my PC optimized & clean wiped feeling crispy& also got my internet tweaked feels like im shooting nuclear missiles also got me open NAT on COD for the first time in forever"', pro:"-Rated_COD"},
    {href:"/esport2.jpg", vouch:'"Vouch for AllSkill and @Nexzou, gained 50-70 frames and I am FRYING. There Pc and internet Opti is goated."', pro:"-Gunless"},
    {href:"/cod3.webp", vouch:'"Huge vouch for allskill and @NexzouI couldn’t get on the game and kept getting constant crashes whenever I tried and I also gained over 100 frames tap in with them if you are having pc issues"', pro:"-Capsidal" }
  ];

  
 return<section className="w-full">
 <div className="home w-full h-[90vh] relative flex justify-center items-center">
 
 <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/homeBg.mp4" type="video/mp4" />
      </video>
      <div className="relative z-[100] flex flex-col items-center gap-y-10 md:gap-y-8">
      <h1 className="text-2xl md:text-5xl">Faster, Smarter Internet Starts Here </h1>
      
      <Button1 content={"Get Started."}/>
      
      </div>

      
      
 
 </div>

 <div className="py-32 flex flex-col gap-y-12 ">
 
 <h1 className=" md:text-7xl text-6xl  italic md:px-16 px-8 text-center md:text-left  ">Services</h1>
  <div className="flex flex-wrap gap-2.5 px-6">
      
    <HomeCard product = {"Internet Optimization"} description = {"We offer the ABSOLUTE BEST Internet optimizations on the market. Trusted by professional players around the world. "} href={"/Internet"}/>
    <HomeCard product = {"Build a PC"} description = {"Need a new PC? Submit a budget and we will get back to you!"} href={"/PcBuild"}/>
    <HomeCard product = {"PC Optimization"} description = {"Alongside the various other Opti's, we also Optimize PC's. This will range from GPU and CPU overclocking to advanced OBS Settings so you can have high FPS even when streaming!"} href={"/PcOpti"}/>
    
  
  </div>
 
 
 </div>



 <div className="py-32 flex flex-col gap-y-12 bg-[#E6E8E6]">
 
 <h1 className="md:text-7xl text-6xl  italic text-black md:px-16 px-8 md:text-left text-center">Testimonials</h1>
 
 
 <div className="w-full md:px-16 md:py-16 py-8 px-8">
 <Carousel slides={slides} />

 
 </div>
 
   


 
 
 </div>
 
 </section>
}
