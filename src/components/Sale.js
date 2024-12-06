'use client'
import { fetchSaleById } from '@/utils/salesUtils'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SaleCard from './SaleCard'
import Notes from './Notes'
import { DisplayCenterCard } from './DisplayCenter'
import { PDFIcon } from './Icons'
import {  Trash2 } from 'lucide-react'

export default function Sale() {
    const { sale } = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading)
            fetchSaleById(setItem, sale, setLoading)
    })
    if (item)
        return (
            <div className='w-full h-full flex flex-col px-3 gap-4 overflow-y-auto custom-scroll pb-4'>
                <div className='w-full min-h-30 py-5 flex justify-around md:justify-end items-center md:gap-3'>
                    <p className='w-fit h-fit px-5 md:px-6 py-1.5 bg-black text-white dark:text-black dark:bg-white rounded-3xl'>Quotation</p>
                    <p className='w-fit h-fit px-5 md:px-6 py-1.5 bg-black text-white dark:text-black dark:bg-white rounded-3xl'>Convert to Job</p>
                    <p className='w-fit h-fit px-5 md:px-6 py-1.5 bg-black text-white dark:text-black dark:bg-white rounded-3xl'>Email Quote</p>
                </div>
                <SaleCard item={item} />
                <div className='border-2 rounded-lg'>
                    <Notes input={'style'} />
                </div>
                <DisplayCenterCard card={item.displayCenterId} />
                <div className='w-full py-10'>
                    <div className='w-full text-xl font-semibold'>
                        Documents
                    </div>
                    <div className=' mt-5 w-full flex flex-wrap gap-3 md:justify-normal justify-center border-2 p-4 rounded-lg'>
                        {
                            Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className='w-full md:w-80 bg-muted rounded-xl flex items-center p-3 gap-3'>
                                    <div className='bg-white p-2 rounded-lg'>
                                        <PDFIcon />
                                    </div>
                                    <div className='flex flex-col w-full'>
                                        <p className='font-semibold'>Design Brief.pdf</p>
                                        <p className='text-muted-foreground'>14 MB</p>
                                    </div>
                                    <div>
                                        <Trash2 />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
}
