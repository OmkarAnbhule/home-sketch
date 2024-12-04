import React from 'react'
import { DownloadIcon, Share2, ShareIcon, XIcon } from 'lucide-react'
import { Separator } from './ui/separator'

export default function Files({ }) {
    return (
        <div className='md:w-[650px] h-full'>
            <div className='w-full p-3 flex justify-between items-center'>
                <p className='py-2 px-7 text-md bg-black text-white w-fit h-fit rounded-lg'>Files</p>
                <XIcon size={20} x-icon={''} className='cursor-pointer' />
            </div>
            <Separator />
            <div className='w-full h-fit flex flex-col justify-center p-3 gap-2 overflow-auto'>
                {
                    Array.from({ length: 5 }).map((item, index) => (
                        <div className='w-full px-4 py-3 rounded-xl bg-muted flex justify-center gap-3 items-center ' key={index}>
                            <div className='w-1/2 flex flex-col gap-2'>
                                <p className=' text-[15px]'>
                                    622_KEYCON_LOT 1843, 19 YEARLING STREET FRASER RISE 3336_FP01.pdf
                                </p>
                                <p className='text-muted-foreground text-[14px]'>
                                    January 13, 2023 - 14MB
                                </p>
                            </div>
                            <div className='w-1/2 flex justify-center items-center md:flex-row flex-col '>
                                <div className='p-3 bg-slate-200 dark:bg-slate-800 flex justify-center items-center text-center rounded-xl text-[15px] '>
                                    Stromwater Legal Point of Discharge
                                </div>
                                <div className=' flex gap-3 justify-around p-2'>
                                    <Share2 size={20} />
                                    <DownloadIcon size={20} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
