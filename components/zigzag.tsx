import Image from 'next/image'

import FeatImage01 from '@/public/images/carBanner.png'
import FeatImage02 from '@/public/images/escavadeiraBanner.png'

export default function Zigzag() {
  return (
    <section className={'bg-white'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 bg-white">


          {/* Items */}
          <div className="grid lg:grid-cols-2 gap-6 grid-cols-1 items-baseline">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-1 md:gap-6 items-start">
              {/* Image */}
              <div className="h-[28rem] order-2 overflow-hidden bg-white max-w-xl md:max-w-none md:w-full mx-auto mb-8 md:mb-0 " data-aos="fade-up">
                <Image className=" max-w-md img-cover mx-auto md:max-w-none h-auto" src={FeatImage01} width={400} height={600} alt="Contact 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto" data-aos="fade-up">
                <div className="p-6 bg-[#020A17]">
                  <h3 className="h3 mb-3">Atendimento para Empresas</h3>
                  <p className="text-xl text-gray-400 mb-4">Especializado para atender sua necessidade.</p>
                  <ul className="hidden text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-1 md:gap-6 items-center">
              {/* Image */}
              <div className="bg-white order-2 h-[28rem] overflow-hidden max-w-xl md:max-w-none md:w-full mx-auto mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="bg-white max-w-md img-cover mx-auto md:max-w-none h-auto" src={FeatImage02} width={400} height={600} alt="Contact 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto" data-aos="fade-up">
                <div className="p-6 bg-[#020A17]">
                  <h3 className="h3 mb-3">Locação de Maquinário</h3>
                  <p className="text-xl text-gray-400 mb-4">O mais moderno para sua
                    empresa.</p>


                  <ul className="hidden text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
