import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import BannerPorto from "@/components/bannerPorto";
import Contact from "@/components/contact";
import Selling from "@/components/selling";
import Zigzag from "@/components/zigzag";
import LogoClouds from "@/components/logoClouds";
import Footer from "@/components/ui/footer";



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
  title: 'Create Next App',
  description: 'Generated by create next app',
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
            <Zigzag />
            <Selling data={{
              h1: `Carros à Vendas`,
              p: 'Trabalhamos com as mais variadas marcas incluindo Ford, Fiat, Nissan, Chevrolet, Volkswagen, Hyundai e muitas outras.',
              collectionType:"cars"
            }}/>
            <LogoClouds/>
            <Selling data={{
              h1: `Locação de Maquinário`,
              p: 'O melhor maquinário para sua empresa.',
              collectionType:"machines"
            }}/>
            <Contact />
          </main>

          <Footer />
          {/*{children}*/}
        </div>
      </body>
    </html>
  )
}


