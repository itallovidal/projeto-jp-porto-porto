
export default function LogoClouds() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-4xl font-semibold leading-8 text-gray-900">
                    As Melhores Marcas
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">

                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src={'images/logoFiat.png'}
                        alt="Transistor"
                        width={200}
                        height={100}
                    />
                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src={'images/logoChevrolet.png'}
                        alt="Reform"
                        width={200}
                        height={100}
                    />
                    <img
                        className="col-span-2 max-h-18 w-full object-contain lg:col-span-1"
                        src={'images/logoH.png'}
                        alt="Tuple"
                        width={200}
                        height={100}
                    />
                    <img
                        className="col-span-2 max-h-18 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src={'images/logoNissan.png'}
                        alt="SavvyCal"
                        width={200}
                        height={100}
                    />
                    <img
                        className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src={'images/logoRenault.png'}
                        alt="Statamic"
                        width={200}
                        height={100}
                    />

                    <img
                        className="col-span-2 col-start-2 max-h-18 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src={'images/logoVolks.png'}
                        alt="Statamic"
                        width={200}
                        height={100}
                    />
                </div>
            </div>
    </div>
  )
}
