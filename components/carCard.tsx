import React from 'react';
interface ICardInfo{
    id: number,
    title: string,
    href: string,
    imageURL: string,
    category: { title: string, href: string },
}

interface ICarCardProps {
    carInfo: ICardInfo
}

function CarCard({carInfo}: ICarCardProps) {
    return (
        <article key={carInfo.id} className="border-2 border-[#020A17] flex bg-[#020A17] max-w-m flex-col items-start justify-between">

            <div className={'bg-white w-full'}>
                <img src={carInfo.imageURL} height={'100%'} alt=""/>
            </div>
            <div className="group relative mb-5 px-5 mt-2">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-200 group-hover:text-gray-600">
                    <a href={carInfo.href}>
                        <span className="absolute inset-0" />
                        {carInfo.title}
                    </a>
                </h3>
            </div>
            {/*<div className="flex items-center gap-x-4 text-xs px-5 mb-2">*/}
            {/*    <a*/}
            {/*        href={post.category.href}*/}
            {/*        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"*/}
            {/*    >*/}
            {/*        {post.category.title}*/}
            {/*    </a>*/}
            {/*</div>*/}


        </article>
    );
}

export default CarCard;