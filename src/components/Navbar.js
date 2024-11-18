import { navItems } from '@/lib/navUtils'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Navbar({ active, setActive }) {
    const router = useRouter()
    return (
        <div className='p-5 h-full'>
            <div className='w-64 h-full bg-[#F3F3F3] dark:bg-muted rounded-3xl flex flex-col justify-between select-none'>
                <div className='w-full h-fit p-4 flex justify-center items-center flex-col mt-10 gap-4'>
                    {
                        navItems.map((item, index) => (
                            <div className={`w-full h-fit flex justify-start items-center rounded-full ${active == index ? 'bg-black dark:bg-white dark:text-black text-white' : 'hover:bg-gray-300 hover:dark:bg-muted-foreground'} px-2 group`} key={index} onClick={() => { setActive(index); router.push(item.href) }}>
                                <div className={`w-fit h-fit p-4 ${active == index ? 'fill-white dark:fill-black' : 'dark:fill-white'}`}>
                                    {item.svg}
                                </div>
                                <p className='text-center w-fit h-fit'>
                                    {item.label}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center gap-x-4 items-center w-full h-fit p-5'>
                    <div className='overflow-hidden w-14 h-14 rounded-full bg-slate-800'>
                        <img src={'/profile.png'} alt='profile' className='w-full h-full object-cover object-top' />
                    </div>
                    <p className='flex justify-center items-center text-center'>
                        John Andikson
                    </p>
                </div>
            </div>
        </div>
    )
}
