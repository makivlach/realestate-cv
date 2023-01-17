import  '@/app/tailwind.css'
import {NextPage} from "next";
import {CVModule} from "@/modules/cv/CVModule";

const HomePage: NextPage = () => {
  return (
      <CVModule />
  )
}

export default HomePage
