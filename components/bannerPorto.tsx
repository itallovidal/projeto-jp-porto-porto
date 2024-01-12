import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function BannerPorto() {

    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-homeBackdrop bg-center bg-no-repeat bg-cover">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"

                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
                    <div className="w-full lg:w-1/2 ">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
                            Porto & Porto
                        </h1>
                        <p className="mt-6 text-white max-w-max p-4 bg-[#020A17] text-lg leading-8 text-gray-600">
                            Conectando <span className={'text-[#FF5B37]'}>você</span>  e o mundo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
