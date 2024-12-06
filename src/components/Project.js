'use client'
import React, { useEffect, useRef, useState } from 'react'
import { BreadcrumbComponent } from './breadcrumb'
import { useParams } from 'next/navigation'
import { fetchProjectById } from '@/utils/ProjectsUtils'
import { Status } from './ui/status'
import { Edit, MapPin } from 'lucide-react'
import Sheet from './ui/sheet'
import dynamic from 'next/dynamic'
import Task from './Task'
import { Authority, ContractorsData, OwnerData } from '@/lib/projectUtils'

const Files = dynamic(() => import('./Files'), { ssr: false })

export default function Project() {
    const { project } = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(3)
    const tabsRef = useRef([]);

    useEffect(() => {
        if (window.innerWidth <= '360px')
            if (tabsRef.current[active]) {
                tabsRef.current[active].scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                });
            }
    }, [active]);

    useEffect(() => {
        if (loading)
            fetchProjectById(setItem, project, setLoading)
    })
    return (
        <div className='flex w-full h-full flex-col overflow-auto custom-scroll'>
            <div className='w-full h-24 p-3 flex justify-center items-center font-semibold'>
                <BreadcrumbComponent loading={loading} partName={item?.name} />
            </div>
            <div className='w-full h-fit flex flex-col gap-3 p-1'>
                <div className='w-full h-fit p-2 border-2 rounded-xl flex flex-col md:flex-row gap-3'>
                    <div className='w-full md:w-1/2 gap-3 flex flex-col'>
                        <div className='bg-muted w-full h-1/3 flex flex-col gap-3 py-6 p-4 rounded-lg'>
                            <div className='flex w-full h-fit justify-between items-center'>
                                <p className='text-2xl font-bold'>
                                    {item?.name}
                                </p>
                                <Status variant={item?.status} />
                            </div>
                            <div className='flex gap-2 h-fit items-center'>
                                <MapPin size={16} />
                                <p className=' break-words whitespace-pre-wrap w-4/5 truncate line-clamp-2 '>
                                    {item?.address}
                                </p>
                                <Sheet btnText={'files'} >
                                    <Files />
                                </Sheet>
                            </div>
                        </div>
                        <div className='w-full h-full bg-muted rounded-lg p-3'>
                            <div className='w-full h-fit flex justify-between items-center px-3 py-1 border-b-2'>
                                <p className='font-bold text-lg'>Owner Details</p>
                                <div className='flex gap-2 items-center text-sm' >
                                    <Edit size={14} />
                                    Edit
                                </div>
                            </div>
                            <div className='w-full py-3'>
                                {
                                    OwnerData.map((item, index) => (
                                        <div className='w-full p-2.5 border-b-2 flex justify-between items-center' key={index}>
                                            <div className='flex items-center gap-2'>
                                                {item.svg}
                                                <p>{item.title}</p>
                                            </div>
                                            <p className='font-bold'>{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='bg-muted w-full md:w-1/2 h-full flex flex-col items-center p-3 rounded-lg'>
                        <div className='w-full h-fit'>
                            <div className='w-full h-fit flex justify-between items-center px-3 py-1 border-b-2'>
                                <p className='font-bold text-lg'>Contractors</p>
                                <div className='flex gap-2 items-center text-sm' >
                                    <Edit size={14} />
                                    Edit
                                </div>
                            </div>
                            <div className='w-full py-3'>
                                {
                                    ContractorsData.map((item, index) => (
                                        <div className='w-full p-2.5 border-b-2 flex justify-between items-center' key={index}>
                                            <div className='flex items-center gap-2'>
                                                {item.svg}
                                                <p>{item.title}</p>
                                            </div>
                                            <p className='font-bold'>{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='w-full h-fit flex justify-between items-center px-3 py-1 border-b-2'>
                                <p className='font-bold text-lg'>Authority</p>
                                <div className='flex gap-2 items-center text-sm' >
                                    <Edit size={14} />
                                    Edit
                                </div>
                            </div>
                            <div className='w-full py-3'>
                                {
                                    Authority.map((item, index) => (
                                        <div className='w-full p-2.5 border-b-2 flex justify-between items-center' key={index}>
                                            <div className='flex items-center gap-2'>
                                                {item.svg}
                                                <p>{item.title}</p>
                                            </div>
                                            <p className='font-bold'>{item.name}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <div className='w-full h-24 md:gap-6 md:px-2 flex items-center overflow-x-auto no-scrollbar'>
                        {
                            ['Concept Stage', 'Preliminary Drawing', 'Developer Approval', 'Construction Drawings', 'Building Permit'].map((item, index) => (
                                <p
                                    ref={(el) => (tabsRef.current[index] = el)}
                                    className={`tab-item ${active == index ? 'text-black border-b-2 font-semibold' : 'text-muted-foreground/85'} flex justify-center items-center h-full border-black w-fit md:min-w-fit min-w-[180px]`} key={index}>{item}</p>
                            ))
                        }
                    </div>
                    <div className='md:border-2 w-full h-fit md:rounded-t-xl overflow-hidden'>
                        <div className='dark:bg-gray-900 bg-gray-200 w-full h-fit hidden md:grid grid-flow-col grid-cols-5 px-3 font-semibold' >
                            <div className='col-span-2 flex p-2 items-center'>
                                Tasks
                            </div>
                            <div className='flex items-center gap-2 justify-center'>
                                Assigned To
                            </div>
                            <div className='flex items-center justify-center'>
                                Status
                            </div>
                            <div className='flex items-center justify-end p-4'>
                                Estimated Completion
                            </div>
                        </div>
                        {
                            ['inProgress', 'notStarted', 'onHold', 'completed', 'inProgress'].map((item, index) => (
                                <Task item={item} index={index} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
