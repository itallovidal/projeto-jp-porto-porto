import CarCard from "@/components/carCard";

const carInfo = [
    {
        id: 1,
        title: 'Argo',
        href: '#',
        imageURL: 'images/argo.png',
        category: { title: 'A', href: '#' },
    },
    {
        id: 1,
        title: 'Fiat',
        href: '#',
        imageURL: 'images/fiatToro.png',
        category: { title: 'AB', href: '#' },
    },
    {
        id: 1,
        title: 'HB20',
        href: '#',
        imageURL: 'images/renault.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'HB20',
        href: '#',
        imageURL: 'images/renault.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'HB20',
        href: '#',
        imageURL: 'images/renault.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'HB20',
        href: '#',
        imageURL: 'images/renault.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'HB20',
        href: '#',
        imageURL: 'images/renault.png',
        category: { title: 'C', href: '#' },
    },
    {
        id: 1,
        title: 'HB20',
        href: '#',
        imageURL: 'images/renault.png',
        category: { title: 'C', href: '#' },
    },
]



interface ISellingProps {
    data: {
        p: string,
        h1: string,
        collectionType: 'cars' | 'machines'
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
                <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {carInfo.map((info) => (
                        <CarCard carInfo={info}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
