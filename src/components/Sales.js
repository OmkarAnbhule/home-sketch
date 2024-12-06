'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Combobox } from './combo-box'
import { useDispatch, useSelector } from 'react-redux'
import { Calendar1, ChevronRight, Copy, HeartIcon, MapPin, Phone, User } from 'lucide-react'
import { Status } from './ui/status'
import { useRouter } from 'next/navigation'
import { fetchSales } from '@/utils/salesUtils'
import { setStatus } from '@/store/slices/salesSlice'
import Lead from './Lead'


const SalesCard = React.memo(({ admin, sale }) => {
    const router = useRouter()
    return (
        <div className='w-full h-fit border-2 flex md:flex-row flex-col p-3 rounded-xl gap-3' onClick={() => router.push(`/sales/${sale._id}`)}>
            <div className='w-full md:w-1/2 h-full'>
                <img src='https://res.cloudinary.com/dvpmx2xxb/image/upload/v1731840649/HomeSketch/tta4w8fiubzgyoxxon8g.png' className='object-cover w-full h-80 rounded-lg'></img>
            </div>
            <div className='w-full bg-gray-100 rounded-lg p-4 flex flex-col gap-3'>
                <div className='w-full flex justify-between items-center p-2'>
                    <p className='font-semibold text-xl'>Quote {sale.QuoteNumber}</p>
                    <div className='flex items-center gap-3'>
                        <Status variant={sale.status} />
                        <div className='border-2 border-gray-300 p-2 rounded-lg'>
                            <HeartIcon size={18} />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/3 flex border-2 px-3 py-1 gap-4 '>
                    <div className='flex items-baseline h-full py-1'>
                        <MapPin size={18} />
                    </div>
                    <div className='w-2/3'>
                        {sale.address}
                    </div>
                    <div className='ml-auto flex items-center'>
                        <Copy size={18} />
                    </div>
                </div>
                <div className='w-full md:w-2/3 h-10 flex gap-2'>
                    <div className='w-3/5 md:w-full border-2 flex gap-2 items-center p-3'>
                        <User size={18} />
                        <p>{sale.name}</p>
                    </div>
                    <div className='w-full md:w-3/4 border-2 flex gap-2 items-center p-3'>
                        <Phone size={18} />
                        <p>{sale.contactnumber}</p>
                    </div>
                </div>
                <div className='w-full flex md:flex-col flex-row justify-between'>
                    <div className='w-full flex justify-start md:justify-end items-center gap-2'>
                        <Calendar1 size={18} />
                        <p>{sale.date.split('T')[0].replaceAll('-', '/')}</p>
                    </div>
                    <div className='flex items-center p-3 w-full justify-end md:justify-start'>
                        <p className='font-semibold'>See Details</p>
                        <ChevronRight size={18} />
                    </div>
                </div>
            </div>

        </div>
    )
})

SalesCard.displayName = 'SalesCard'


export default function Sales() {
    const dispatch = useDispatch()
    const { status, sales } = useSelector((state) => state.sales)
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading)
            fetchSales(dispatch, setLoading)
    }, [])

    const sortedProjects = useMemo(() => {
        return [...(sales || [])].sort((a, b) => a.position - b.position);
    }, [sales]);

    if (sales)
        return (
            <div className='w-full h-full'>
                <div className='w-full hidden md:flex gap-2 font-bold text-2xl p-2'>
                    Sales
                    <div className=''>
                        <Combobox
                            variant={"ghost"}
                            field={{ value: status }}
                            placeholder={'Status'}
                            frameworks={[
                                { value: "inProgress", label: "In Progress" },
                                { value: "completed", label: "Complete" },
                                { value: "onHold", label: "On Hold" },
                                { value: "notStarted", label: "Not Started" },
                            ]}
                            onChange={(value) => dispatch(setStatus(value))}
                        />
                    </div>
                    <div className='ml-auto mr-2'>
                        <Lead />
                    </div>
                </div>
                <div className='w-full h-full pb-0 md:pb-20 flex flex-wrap md:justify-normal justify-center gap-4 overflow-y-auto custom-scroll'>
                    {
                        !loading &&
                        sortedProjects
                            .filter((item) => status === '' || item.status === status)
                            .map((item, idx) => (
                                <SalesCard admin={admin} key={idx} sale={item} />
                            ))
                    }
                </div>
            </div >
        )
}
