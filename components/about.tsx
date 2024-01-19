import React from 'react';

function About() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 py-14 lg:px-8 bg-aboutBackdrop bg-opacity-0 bg-center bg-no-repeat bg-cover">
                <div className="mx-auto max-w-4xl pb-16">
                    <div className="w-full ">
                        <h1 className="relative text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl
                        before:absolute before:h-2 before:w-10 before:content-[''] before:-bottom-2 before:bg-[#FF5B37]
                        ">
                            Sobre
                        </h1>


                        <p className="mt-6 text-white w-full text-lg leading-8">
                            Bem-vindo à Porto & Porto, uma empresa que nasceu em 2006, composta por uma equipe de profissionais altamente qualificados no segmento de venda automotiva, transporte de Veículos, locação de veículos, equipamentos pesados e carretas rodoviárias. Estamos empenhados em inovar diariamente no mercado, atendendo às demandas de pessoas físicas e jurídicas e superando as expectativas dos nossos clientes.
                        </p>


                        <p className="mt-6 text-white w-full text-lg leading-8">
                            Nosso compromisso é respaldado por anos de experiência e reflete em cada serviço que oferecemos. Inserimos em nossa abordagem a inovação e simplicidade, características fundamentais gravadas em nosso DNA empresarial. Buscamos incessantemente aprimorar a qualidade dos nossos serviços, assegurando a satisfação dos clientes e reconhecendo o valor das pessoas que integram nossa equipe.
                        </p>
                        <p className="mt-6 text-white w-full text-lg leading-8">
                            No grupo Porto, concentramos nossos esforços na mobilidade, eficiência e comodidade das pessoas. Acreditamos que cada solução que proporcionamos contribui não apenas para o sucesso dos nossos clientes, mas também para o progresso do mercado como um todo. Estamos aqui para oferecer uma experiência única, onde a excelência e a dedicação são nossas marcas registradas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;