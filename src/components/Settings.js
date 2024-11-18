import React from 'react'
import { settingsItems } from '@/lib/settingsUtils'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { MessageCircleQuestion } from 'lucide-react'

export default function Settings() {
    const router = useRouter()
    return (
        <div className='flex justify-center py-4 pl-4 rounded-xl items-center gap-2 w-full h-full flex-col'>
            <div className='w-full hidden md:flex justify-start items-center font-bold text-2xl'>
                Settings
            </div>
            <div className='w-full h-fit md:pt-12 pb-10 flex flex-wrap gap-4 overflow-y-auto custom-scroll'>
                {
                    settingsItems.map((item, index) => (
                        <div className='bg-muted w-[380px] h-[160px] p-6 rounded-lg flex flex-col gap-6 hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer' key={index} onClick={() => router.push(`settings/${item.href}`)}>
                            <div className='w-full flex justify-start items-center stroke-black dark:stroke-white'>
                                {item.icon}
                            </div>
                            <div>
                                <div className='w-full flex justify-start items-center font-bold'>
                                    {item.title}
                                </div>
                                <div className='w-full h-fit text-start text-muted-foreground'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className='w-full flex justify-center items-center h-14 mt-8'>
                    <p className='hover:underline cursor-pointer' onClick={() => router.push('/settings/termsAndConditions')}>
                        Terms & Conditions
                    </p>
                </div>
                <div className='absolute w-fit h-fit bottom-10 right-10 flex justify-center items-center'>
                    <Button variant="secondary" onClick={() => router.push('/settings/help')} className="bg-blue-600 hover:bg-blue-900 rounded-xl flex justify-center items-center gap-2 text-white"><MessageCircleQuestion />Help</Button>
                </div>
            </div>
        </div >
    )
}
