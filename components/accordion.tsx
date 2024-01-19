import React from 'react';
import {CaretDown} from "@phosphor-icons/react/dist/ssr";



function Accordion() {
    return (
        <article className={'py-24 sm:py-32 bg-white'}>
            <div className={'mx-auto max-w-4xl px-6 lg:px-8'}>
                <div className="relative mb-3">
                    <h6 className="mb-0">
                        <button
                            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                            data-collapse-target="collapse-1"
                        >
                            <span className={'text-2xl'}>Consigo Trocar meu carro com a Porto&Porto?</span>

                            <CaretDown size={32} className={'absolute right-0 pt-1 text-xs group-open:rotate-180 transition'}/>


                        </button>
                    </h6>
                    <div
                        data-collapse="collapse-1"
                        className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                        <div className="p-4 text-sm leading-normal text-black">
                            A Porto & Porto precisa avaliar o seu usado! Para começar, é só você entrar em contato com nosso time de vendas para enviar as fotos e informações do seu carro. Depois, é só continuar a negociação. Avalie agora e aproveite!
                        </div>
                    </div>
                </div>
                <div className="relative mb-3">
                    <h6 className="mb-0">
                        <button
                            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                            data-collapse-target="collapse-2"
                        >
                            <span className={'text-2xl'}>Posso financiar meu seminovo?</span>
                            <CaretDown size={32} className={'absolute right-0 pt-1 text-xs group-open:rotate-180 transition'}/>
                        </button>
                    </h6>
                    <div
                        data-collapse="collapse-2"
                        className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                        <div className="p-4 text-sm leading-normal text-black">
                           <b> A Porto & Porto facilita o seu financiamento! </b>
                            A análise de crédito é rápida e feita pelo próprio Consultor de Vendas. Basta entrar em contato com a nossa equipe de vendas.

                        </div>
                    </div>
                </div>
            </div>

        </article>
    );
}

export default Accordion;