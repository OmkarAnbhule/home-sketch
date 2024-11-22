import { Building2, ChevronRightIcon, ChevronUpIcon, HeartIcon, Milestone, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import { BathIcon, BedIcon, CarIcon, CubeSizeIcon, RulerIcon, SofaIcon } from './Icons'
import { Item } from '@radix-ui/react-dropdown-menu'

export default function DisplayCard({ card }) {
    const [isView, setIsView] = useState(false)
    return (
        <div className=' w-full  xl:w-1/3 h-fit rounded-2xl p-5 flex flex-col gap-3 bg-[rgba(14,14,15,0.05)] dark:bg-[rgba(155,155,155,0.05)] transition-all duration-300 dark:hover:bg-[rgba(255,255,255,0.05)]'>
            <div className='w-full h-fit flex justify-between items-center'>
                <h1 className='text-xl font-bold'>{card.title}</h1>
                <div className='w-fit h-fit p-2 border-2 rounded-lg hover:cursor-pointer group' >
                    <HeartIcon size={20} className='group-hover:fill-red-600' />
                </div>
            </div>
            <div className='w-full flex flex-wrap gap-2'>
                <div className={`${isView ? 'w-[48%] p-1' : 'w-full p-2'} transition-all duration-300 h-8 border-2 flex rounded-md justify-between items-center`}>
                    <div className='flex justify-center items-center dark:fill-white fill-black gap-1'>
                        <CubeSizeIcon />
                        <p>
                            Land width
                        </p>
                    </div>
                    <div className='flex justify-center gap-1 items-center'>
                        <p className='font-bold'>{card.width}</p>
                        <sub>m</sub>
                    </div>
                </div>
                <div className={`${isView ? 'w-[48%] p-1' : 'w-full p-2'} transition-all duration-300 h-8 border-2 flex rounded-md justify-between items-center`}>
                    <div className='flex justify-center items-center dark:fill-white fill-black gap-1'>
                        <CubeSizeIcon />
                        <p>
                            Land depth
                        </p>
                    </div>
                    <div className='flex justify-center gap-1 items-center'>
                        <p className='font-bold'>{card.depth}</p>
                        <sub>m</sub>
                    </div>
                </div>
                <div className='w-full h-8 border-2 flex rounded-md justify-between items-center p-2'>
                    <div className='flex justify-center items-center dark:fill-white fill-black gap-2'>
                        <RulerIcon />
                        <p>
                            Total area
                        </p>
                    </div>
                    <div className='flex justify-center gap-2 items-center'>
                        <p className='font-bold'>{card.area}</p>
                        <sub>sqt</sub>
                    </div>
                </div>
            </div>
            <div className='grid place-items-center grid-cols-2 grid-rows-2 gap-2'>
                <div className='w-full h-8 border-2 p-2 flex justify-around items-center'>
                    <div className='flex justify-start items-center gap-2 h-full w-full'>
                        <div className='flex justify-center items-center h-full w-fit fill-black dark:fill-white'>
                            <BedIcon />
                        </div>
                        <p className='flex justify-center items-center text-center'>Bedrooms</p>
                    </div>
                    <p>{card.bedrooms}</p>
                </div>
                <div className='w-full h-8 border-2 p-2 flex justify-around items-center'>
                    <div className='flex justify-start items-center gap-2 h-full w-full'>
                        <div className='flex justify-center items-center h-full w-fit fill-black dark:fill-white'>
                            <BathIcon />
                        </div>
                        <p className='flex justify-center items-center text-center'>Bathrooms</p>
                    </div>
                    <p>{card.bathrooms}</p>
                </div>
                <div className='w-full h-8 border-2 p-2 flex justify-around items-center'>
                    <div className='flex justify-start items-center gap-2 h-full w-full'>
                        <div className='flex justify-center items-center h-full w-fit fill-black dark:fill-white'>
                            <CarIcon />
                        </div>
                        <p className='flex justify-center items-center text-center'>Garage</p>
                    </div>
                    <p>{card.garage}</p>
                </div>
                <div className='w-full h-8 border-2 p-2 flex justify-around items-center'>
                    <div className='flex justify-start items-center gap-2 h-full w-full'>
                        <div className='flex justify-center items-center h-full w-fit fill-black dark:fill-white'>
                            <SofaIcon />
                        </div>
                        <p className='flex justify-center items-center text-center'>Living</p>
                    </div>
                    <p>{card.living}</p>
                </div>
                {
                    isView &&
                    (
                        <>
                            <div className='w-full h-8 border-2 p-2 flex justify-around items-center transition-all duration-300'>
                                <div className='flex justify-start items-center gap-2 h-full w-full'>
                                    <div className='flex justify-center items-center h-full w-fit fill-black dark:fill-white'>
                                        <Building2 size={16} />
                                    </div>
                                    <p className='flex justify-center items-center text-center'>Storeys</p>
                                </div>
                                <p>{card.storeys}</p>
                            </div>
                            <div className='w-full h-8 border-2 p-2 flex justify-around items-center transition-all duration-300'>
                                <div className='flex justify-start items-center gap-2 h-full w-full'>
                                    <div className='flex justify-center items-center h-full w-fit fill-black dark:fill-white'>
                                        <Milestone size={16} />
                                    </div>
                                    <p className='flex justify-center items-center text-center'>Driveway</p>
                                </div>
                                <p>{card.driveway}</p>
                            </div>
                        </>
                    )
                }
            </div>
            <div className='w-full h-full flex justify-start gap-4'>
                <div className='flex items-center font-bold gap-1' onClick={() => setIsView(!isView)}>
                    See Details
                    {
                        isView ? (
                            <ChevronUpIcon size={18} strokeWidth={1.5} />
                        ) : (
                            <ChevronRightIcon size={18} strokeWidth={1.5} />
                        )
                    }
                </div>
                <div className='flex items-center font-bold gap-1'>
                    Add Lead <PlusIcon size={18} strokeWidth={1.5} />
                </div>
            </div>
        </div>
    )
}
