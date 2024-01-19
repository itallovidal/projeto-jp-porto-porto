import Image from 'next/image'

import FeatImage01 from '@/public/images/carBanner.png'
import FeatImage02 from '@/public/images/escavadeiraBanner.png'

export default function Services() {
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
                  <h4 className="h4 mb-3">Atendimento para Empresas</h4>
                  <p className="text-xl text-gray-400 mb-4">Especializado para atender sua necessidade.</p>
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
                  <h4 className="h4 mb-3">Locação de Equipamentos Pesados</h4>
                  <p className="text-xl text-gray-400 mb-4">O mais moderno para sua
                    empresa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
