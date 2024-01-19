import LogoClouds from "@/components/logoClouds";
import Contact from '@/components/contact'
import Services from '@/components/services'
import BannerPorto from "@/components/bannerPorto";
import Selling from "@/components/selling";
import Accordion from "@/components/accordion";

export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}


export default function Home() {

    console.log("a")

  return (
    <>
        <BannerPorto/>
        <Contact />
        {/*<Selling/>*/}
        <Accordion/>
        <Services />
        <LogoClouds/>
    </>
  )
}
