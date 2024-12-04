import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Status } from './ui/status'
import { User, X } from 'lucide-react'
import { Separator } from './ui/separator'

export default function Task({ item, index }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger className='w-full'>
                <div className='border-b-2 w-full h-fit flex flex-col gap-3 md:grid md:grid-cols-5 text-gray-600 px-3 py-1' key={index}>
                    <div className='col-span-2 flex p-2 items-center gap-2 justify-between '>
                        <div className='flex items-center gap-2 text-muted-foreground '>
                            <img src={'/profile.png'} alt='profile' className='w-10 h-10 rounded-full object-cover object-top md:hidden block' />
                            Task{index + 1} Name
                        </div>
                        <Status variant={item} className={'md:hidden block'} />
                    </div>
                    <div className='hidden md:flex items-center gap-2 justify-center'>
                        <img src={'/profile.png'} alt='profile' className='w-10 h-10 rounded-full object-cover object-top' />
                        <p className='text-muted-foreground'>John Cena</p>
                    </div>
                    <div className='flex items-center justify-center w-full flex-col h-full'>
                        <Status variant={item} className={'hidden md:block'} />
                        <p className='md:hidden w-full flex text-sm justify-end items-end px-4 text-muted-foreground'>
                            January 8th, 2024
                        </p>
                    </div>
                    <div className='hidden md:flex items-center justify-end p-4 text-muted-foreground'>
                        January 8th, 2024
                    </div>
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className='flex justify-between'>
                        Task Name
                        <AlertDialogCancel className='border-none'>
                            <X size={20} />
                        </AlertDialogCancel>
                    </AlertDialogTitle>
                    <Separator />
                    <div className='w-full h-fit pb-3 flex justify-start items-center flex-col border-b-2'>
                        <div className='w-full flex justify-between'>
                            <p className='font-semibold text-lg'>SubTask 1</p>
                            <Status />
                        </div>
                        <div className='w-full flex flex-col '>
                            <div className='flex gap-2 items-center'>
                                <p className='text-muted-foreground'>Assigned to:</p>
                                <User className='rounded-full size-4 border-2 border-muted-foreground'/>
                                <p>John Doe</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-muted-foreground'>Estimated Completion:</p>
                                <p>January 8th, 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit pb-3 flex justify-start items-center flex-col border-b-2'>
                        <div className='w-full flex justify-between'>
                            <p className='font-semibold text-lg'>SubTask 1</p>
                            <Status />
                        </div>
                        <div className='w-full flex flex-col '>
                            <div className='flex gap-2 items-center'>
                                <p className='text-muted-foreground'>Assigned to:</p>
                                <User className='rounded-full size-4 border-2 border-muted-foreground'/>
                                <p>John Doe</p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='text-muted-foreground'>Estimated Completion:</p>
                                <p>January 8th, 2024</p>
                            </div>
                        </div>
                    </div>
                    <AlertDialogDescription>
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    )
}
