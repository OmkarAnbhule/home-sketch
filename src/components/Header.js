import { Button } from '@/components/ui/button'
import { navItems } from '@/lib/navUtils'
import { BellRing, HeartIcon, MenuIcon, Search, SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import { ModeToggle } from './toggle-mode'
import { Input } from '@/components/ui/input'
import { Combobox } from './combo-box'
import Sheet from './ui/sheet'
import { Filter } from './Filter'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus } from '@/store/slices/projectSlice'

export default function Header({ index, setOpen }) {
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.project)

    return (
        <AnimatePresence mode='popLayout'>
            <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className='w-full h-fit md:h-[70px] flex justify-between flex-col md:flex-row'
            >
                <div className={`w-full md:w-fit h-full px-4 md:py-0 py-10 items-center md:dark:bg-transparent md:bg-transparent bg-[#F3F3F3] dark:bg-muted ${index == 0 ? 'flex justify-between' : 'flex justify-between md:hidden'}`}>
                    <Button variant="outline" className="md:hidden block bg-none border-none w-fit h-fit p-0" onClick={() => setOpen((prev) => !prev)}><MenuIcon className='size-8' /></Button>
                    <p className={`font-bold text-xl flex justify-center items-center w-fit h-full font-sans`}>
                        {navItems[index]?.label}
                    </p>
                    <div className='md:block hidden ml-5'>
                        <Sheet btnText={(<p className='flex gap-2'><SlidersHorizontal /> Filter</p>)}>
                            <Filter />
                        </Sheet>
                    </div>
                    <div className='md:hidden flex'>
                        <ModeToggle />
                    </div>
                </div>
                <div className={`w-full ${index != 0 ? 'md:w-full justify-between' : 'justify-end md:w-1/2'} h-full flex px-2 items-center`}>
                    <div className='w-full md:w-fit justify-center h-full flex items-center select-none p-2 '>
                        {
                            index !== 3 &&
                            <div className='w-full h-fit relative'>
                                <Search className='absolute text-gray-500 size-4 top-[8px] left-2' />
                                <Input placeholder={`Search`} className="pl-7 placeholder:text-gray-400" />
                            </div>
                        }
                    </div>
                    {
                        index == 2 ?
                            (
                                <div className='w-1/3 flex md:hidden'>
                                    <Combobox
                                        field={{ value: status }}
                                        placeholder={'Status'}
                                        frameworks={[
                                            { value: "inProgress", label: "In Progress" },
                                            { value: "complete", label: "Complete" },
                                            { value: "onHold", label: "On Hold" },
                                            { value: "NotStarted", label: "Not Started" },
                                        ]}
                                        onChange={(value) => dispatch(setStatus(value))}
                                    />
                                </div>
                            ) :
                            index != 3 &&
                            (
                                <div className='flex md:hidden justify-around items-center w-1/3 h-full gap-2 p-2'>
                                    <div className='w-fit h-fit rounded-md bg-muted'>
                                        <Sheet btnText={<SlidersHorizontal />} className={'w-fit h-fit bg-muted'} >
                                            <Filter />
                                        </Sheet>
                                    </div>
                                    <div className='w-fit h-fit p-[10px] px-[14px] rounded-md bg-muted'>
                                        <HeartIcon className='size-4 cursor-pointer hover:fill-red-500' />
                                    </div>
                                </div>
                            )
                    }
                    <div className='hidden md:flex justify-around items-center w-fit h-full gap-6 p-4'>
                        <BellRing className='size-4 hover:fill-yellow-300 cursor-pointer' />
                        <HeartIcon className='size-4 cursor-pointer hover:fill-red-500' />
                        <ModeToggle />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
