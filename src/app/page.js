import Image from "next/image";
import Button1 from "@/Components/Buttons/Button1";
import HomeCard from "@/Components/HomeCard";
import Carousel from "@/Components/Carousel";



export default async function Home() {
  const slides = [
    "/champ.jpg", 
    "/cod1.jpg",
    "/esport1.jpg",
    "/esport2.jpg",
    "/esport3.avif"
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

 <div className="py-32 flex flex-col gap-y-12">
 
 <h1 className=" md:text-7xl text-6xl  italic md:px-16 px-8 text-center md:text-left  ">Services</h1>
  <div className="flex justify-center flex-wrap gap-2.5 px-6">
      
    <HomeCard product = {"Internet Optimization"} description = {"test"} href={"/Internet"}/>
    <HomeCard product = {"Get Controller"} description = {"test"} href={"/Controller"}/>
    <HomeCard product = {"Build a PC"} description = {"test"} href={"/PcBuild"}/>
    <HomeCard product = {"PC Optimization"} description = {"test"} href={"/PcOpti"}/>
    
  
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
