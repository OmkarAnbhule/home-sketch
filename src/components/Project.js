'use client'
import React, { useEffect, useState } from 'react'
import { BreadcrumbComponent } from './breadcrumb'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'

export default function Project() {
    const { project } = useParams()
    const { projects } = useSelector((state) => state.project)
    const [item, setItem] = useState()
    useEffect(() => {
        if (projects.length) {
            console.log(projects)
            setItem(projects?.filter(itm => itm._id === project))
        }
    }, [projects])
    console.log(item)
    return (
        <div className='flex w-full h-full flex-col'>
            <div className='w-full h-24 flex justify-center items-center font-semibold'>
                <BreadcrumbComponent loading={false} partName={item[0]?.name} />
            </div>

        </div>
    )
}
