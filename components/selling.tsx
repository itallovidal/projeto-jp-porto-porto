import CarCard from "@/components/carCard";

const machineInfo = [
    {
        id: 1,
        title: 'Escavadeira',
        href: '#',
        imageURL: 'images/maquinario/escavadeira.webp',
        category: { title: 'AB', href: '#' },
    },
    {
        id: 1,
        title: 'Pá Carregadeira',
        href: '#',
        imageURL: 'images/maquinario/pa-carregadeira.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'Prancha Carreta',
        href: '#',
        imageURL: 'images/maquinario/prancha-carreta.webp',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'Retro-Escavadeira',
        href: '#',
        imageURL: 'images/maquinario/retro-escavadeira.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'Trator Esteira',
        href: '#',
        imageURL: 'images/maquinario/trator-esteira.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'Triturador de Galho',
        href: '#',
        imageURL: 'images/maquinario/triturador-galho.png',
        category: { title: 'C', href: '#' },
    },
]

const carInfo = [
    {
        id: 1,
        title: 'Argo',
        href: '#',
        imageURL: 'images/carros/argo.png',
        category: { title: 'AB', href: '#' },
    },
    {
        id: 1,
        title: 'Fiat Toro',
        href: '#',
        imageURL: 'images/carros/fiatToro.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'HB20',
        href: '#',
        imageURL: 'images/carros/hb20.webp',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'Renault',
        href: '#',
        imageURL: 'images/carros/renault.png',
        category: { title: 'C', href: '#' },
    },
]


interface ISellingProps {
    data: {
        p: string,
        h1: string,
        collectionType: 'cars' | 'machines',
    }
}

export default function Selling({data} : ISellingProps) {
        return (
            <div className={`${data.collectionType === 'machines' 
                ? 'bg-blue' : 'bg-white'
            } py-24 sm:py-32`}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className={`text-3xl font-bold tracking-tight ${data.collectionType === 'machines'
                            ? 'text-gray-200' : 'text-gray-900'} sm:text-4xl`}>{data.h1}</h2>
                        <p className={`mt-2 text-lg leading-8 ${data.collectionType === 'machines'
                            ? 'text-gray-200' : 'text-gray-900'} `}>
                            {data.p}
                        </p>
                    </div>
                    <div className={`mx-auto mt-5 grid max-w-2x1 grid-cols-1 gap-x-24 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none 
                    ${data.collectionType === 'machines' ?"lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                        {data.collectionType === 'machines' ? machineInfo.map((info) => (
                            <CarCard carInfo={info}/>
                        )) : carInfo.map((info) => (
                            <CarCard carInfo={info}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        )
}
