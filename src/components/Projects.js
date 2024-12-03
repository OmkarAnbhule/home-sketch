'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { Combobox } from './combo-box'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '@/store/slices/projectSlice'
import { EllipsisVertical, HeartIcon, Mail, MapPin, Phone, User } from 'lucide-react'
import { Status } from './ui/status'
import { fetchProjects } from '@/utils/ProjectsUtils'
import { useRouter } from 'next/navigation'


const ProjectCard = React.memo(({ admin, project }) => {
    const router = useRouter()
    return (
        <div className='bg-muted w-[380px] h-[330px] p-6 rounded-lg flex flex-col gap-6 dark:hover:bg-slate-700 hover:bg-slate-100 cursor-pointer' onClick={() => router.push(`/projects/${project._id}`)}>
            <div className='w-full h-10 flex justify-between items-center'>
                <p className='font-bold'>
                    {project.name}
                </p>
                <div className='flex justify-around items-center gap-2 '>
                    {
                        !admin && (
                            <Status variant={project.status} />
                        )
                    }
                    <div className='border-2 p-2 rounded-md'>
                        <HeartIcon size={16} />
                    </div>
                    {
                        admin && (
                            <div className='border-2 p-2 rounded-md'>
                                <EllipsisVertical size={16} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className='w-full h-full flex flex-col gap-4'>
                <div className='w-full h-fit p-2 border border-gray-300 dark:border-gray-500 rounded-md flex gap-2'>
                    <MapPin size={18} />
                    <p className=' break-words whitespace-pre-wrap w-4/5 truncate line-clamp-2 '>
                        {project.address}
                    </p>
                </div>
                {
                    admin && (
                        <Status variant={project.status} />
                    )
                }
                <div className='w-full h-full flex flex-col gap-2 p-1'>
                    <div className='w-full h-fit flex justify-between pb-3 border-b-2 border-muted-foreground/50'>
                        <div className='flex items-center justify-center gap-2 '>
                            <User size={18} />
                            <p>
                                Client
                            </p>
                        </div>
                        <p className='truncate w-28 text-end font-semibold'>
                            {project.client}
                        </p>
                    </div>
                    <div className='w-full h-fit flex justify-between pb-3 border-b-2 border-muted-foreground/50'>
                        <div className='flex items-center justify-center gap-2 '>
                            <Phone size={18} className='rotate-[10deg] transform' />
                            <p>
                                Stage
                            </p>
                        </div>
                        <p className='truncate w-28 text-end font-semibold'>
                            {project.stage}
                        </p>
                    </div>
                    <div className='w-full h-fit flex justify-between pb-3 border-b-2 border-muted-foreground/50'>
                        <div className='flex items-center justify-center gap-2'>
                            <Mail size={18} />
                            <p>
                                Developer
                            </p>
                        </div>
                        <p className='truncate w-28 text-end font-semibold'>
                            {project.developer}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
})


export default function Projects() {
    const dispatch = useDispatch()
    const { status, projects } = useSelector((state) => state.project)
    const [admin, setAdmin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading)
            fetchProjects(dispatch, setLoading)
    }, [])

    const sortedProjects = useMemo(() => {
        return [...(projects || [])].sort((a, b) => a.position - b.position);
    }, [projects]);

    if (projects)
        return (
            <div className='w-full h-full'>
                <div className='w-full hidden md:flex gap-2 font-bold text-2xl p-2'>
                    Projects
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
                </div>
                <div className='w-full h-full md:pt-12 pb-0 md:pb-20 flex flex-wrap md:justify-normal justify-center gap-4 overflow-y-auto custom-scroll'>
                    {
                        !loading &&
                        sortedProjects
                            .filter((item) => status === '' || item.status === status)
                            .map((item, idx) => (
                                <ProjectCard admin={admin} key={idx} project={item} />
                            ))
                    }
                </div>
            </div >
        )
}
