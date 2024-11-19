import LogoClouds from "@/components/logoClouds";
import Contact from '@/components/contact'
import Services from '@/components/services'
import BannerPorto from "@/components/bannerPorto";
import Accordion from "@/components/accordion";

export const metadata = {
  title: 'Porto & Porto',
  description: 'profissionais altamente qualificados no segmento de venda automotiva, transporte de Veículos, locação de veículos, equipamentos pesados e carretas rodoviárias.',
}


export default function Home() {
  return (
    <>
        <BannerPorto/>
        <Contact />
        <Accordion/>
        <Services />
        <LogoClouds/>
    </>
  )
}
