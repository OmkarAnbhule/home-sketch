import React, { useRef, useState, useEffect, Suspense } from 'react';
import DisplayCard from './DisplayCard';
import { SearchIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Model } from './Model';
import { DisplayCardSkeleton } from './ui/Skeleton';
import { fetchDisplayCards } from '@/utils/DIsplayCenterUtils';

const DisplayCenterCard = ({ card }) => {
    const carouselRef = useRef(null);
    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className='flex justify-center p-4 rounded-xl items-center border-2 gap-2 w-full md:flex-row flex-col h-fit md:h-82 snap-center'>
            <DisplayCard card={card} />
            <div className='w-full md:w-1/3 min-h-80 rounded-2xl overflow-hidden border-2 relative group bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${card.blueprint})` }}
            >
                <div className='absolute w-full h-full bg-[rgba(0,0,0,0.43)] hidden group-hover:block transition-all duration-300 z-[2]'></div>
                <div className='absolute bottom-2 right-2 border-2 bg-muted hover:cursor-pointer rounded-lg w-fit h-fit p-3 z-10'>
                    <SearchIcon className='size-4' />
                </div>
            </div>
            <div className='w-full md:w-1/3 h-full min-h-80 border-2 rounded-2xl relative'>
                <button onClick={scrollLeft} className='absolute bg-[rgba(255,255,255,0.23)] dark:bg-[rgba(0,0,0,0.43)] backdrop-blur-xl left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full'>
                    <ChevronLeft />
                </button>
                <button onClick={scrollRight} className='absolute bg-[rgba(255,255,255,0.23)] dark:bg-[rgba(0,0,0,0.43)] backdrop-blur-xl right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full'>
                    <ChevronRight />
                </button>
                <div className='absolute bottom-2 right-2 bg-[rgba(255,255,255,0.13)] backdrop-blur-lg hover:cursor-pointer rounded-lg w-fit h-fit p-3 z-10'>
                    <SearchIcon className='size-4' />
                </div>
                <div className='absolute top-2 right-2 bg-transparent hover:cursor-pointer rounded-lg z-10'>
                    <Model model={card.models} />
                </div>
                <div className='w-full h-80 overflow-hidden flex gap-4'>
                    <div ref={carouselRef} className='w-full h-80 overflow-x-scroll flex flex-wrap flex-col snap-mandatory snap-x carousel'>
                        {
                            card.caraousel.map((image, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-cover bg-no-repeat bg-center w-full h-80 snap-center"
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const Skeleton = ({ length }) => {
    Array.from({ length: length }).map((_, index) => (
        <DisplayCardSkeleton key={index} />
    ))
}

export default function DisplayCenter() {
    const [displayCards, setDisplayCards] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading)
            fetchDisplayCards(setDisplayCards, setIsLoading)
    }, []);
    return (
        <div className='w-[98%] h-full p-4 md:mt-4 my-4 select-none overflow-auto custom-scroll snap-x snap-mandatory flex md:flex-nowrap flex-wrap flex-col gap-4'>

            <Suspense fallback={<Skeleton length={8} />}>
                {
                    displayCards.map((card, index) => (
                        <DisplayCenterCard card={card} key={index} />
                    ))
                }
            </Suspense>
        </div>
    );
}
