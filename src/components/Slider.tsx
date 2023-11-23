"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
const Slider = () => {
  const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide1.png",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in NY",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your family",
      image: "/slide3.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>setCurrentSlide((prev)=>(prev===data.length-1 ? 0: prev+1)),
    4000);
    return ()=>clearInterval(interval);
  },[])
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="flex-1 flex items-center justify-center flex-col gap-4  text-red-500 font-bold md:gap-2">
        <h1 className="text-3xl text-center uppercase p-4 md:p-5 md:text-5xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white px-8 py-4 rounded-md">
          Order Now
        </button>
      </div>

      <div className="w-full flex-1 relative">
        <Image src={data[currentSlide].image} alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Slider;
