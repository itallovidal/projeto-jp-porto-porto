import LogoClouds from "@/components/logoClouds";
import Contact from '@/components/contact'
import Zigzag from '@/components/zigzag'
import BannerPorto from "@/components/bannerPorto";
import Selling from "@/components/selling";

export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}


export default function Home() {
  return (
    <>
        <BannerPorto/>
        <Contact />
        <Selling/>
        <Zigzag />
        <LogoClouds/>
    </>
  )
}
