// import Image from "next/image";
import Slider from "@/components/Slider";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
export default function Home(){
  return (
    <main className="overflow-x-hidden">
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}