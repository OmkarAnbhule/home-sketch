import { MapPin, ScrollText } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div className='w-full h-full p-2 overflow-auto custom-scroll'>
            <div className='w-full py-3'>
                <p className='text-lg'>Hi, <i>John</i></p>
                <p className='text-2xl font-bold'>Organize your Schedule with Ease!</p>
            </div>
            <div className='flex flex-col w-full h-fit py-3 md:pr-3 gap-5' >
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <div className='w-full bg-muted px-2 py-3 flex justify-around rounded-lg' key={index}>
                            <div className='flex justify-center items-start w-10'>
                                <div className='bg-white rounded-full p-1.5 border-2'>
                                    {
                                        index % 2 ?
                                            (
                                                <div className='bg-black p-1 rounded-full'>
                                                </div>
                                            )
                                            :
                                            (
                                                <div className='bg-white p-1 rounded-full'>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                            <div className='w-full flex flex-col md:gap-0 gap-2'>
                                <div className='flex w-full md:flex-row flex-col-reverse gap-2  justify-between items-start'>
                                    <p>Provide Domestic Building Contract</p>
                                    <div className='flex flex-col justify-center bg-gray-300 px-6 py-1 rounded-full text-sm items-center '>
                                        <p>April 18th, 2024</p>
                                        <p>(10 days ago)</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 text-sm'>
                                    <div className='flex gap-2 items-center'>
                                        <ScrollText size={16} />
                                        <p>Project Number</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <MapPin size={16} />
                                        <p>Full Address for verfication</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
