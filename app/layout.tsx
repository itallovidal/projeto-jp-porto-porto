import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import BannerPorto from "@/components/bannerPorto";
import Contact from "@/components/contact";
import Selling from "@/components/selling";
import Services from "@/components/services";
import LogoClouds from "@/components/logoClouds";
import Footer from "@/components/ui/footer";
import Accordion from "@/components/accordion";
import About from "@/components/about";



const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: 'Porto e Porto',
  description: 'Profissionais altamente qualificados no segmento de venda automotiva, transporte de Veículos, locação de veículos, equipamentos pesados e carretas rodoviárias.',
  icons: {
    icon: './../public/images/icones/logo-porto.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <main className="grow">

            <BannerPorto/>
            <Services />
            <Accordion/>
            
            <Selling data={{
              h1: `Carros à Venda`,
              p: 'Trabalhamos com as mais variadas marcas incluindo Ford, Fiat, Nissan, Chevrolet, Volkswagen, Hyundai e muitas outras.',
              collectionType:"cars",
            }}/>         
            <LogoClouds/>
            <Selling data={{
              h1: `Equipamentos Pesados`,
              p: 'O melhor maquinário para sua empresa.',
              collectionType:"machines",
            }}/>
            <Contact />
            <About/>
          </main>

          <Footer />
        </div>

        <script src="node_modules/@material-tailwind/html/scripts/collapse.js"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>
      </body>
    </html>
  )
}


