import React, { useEffect, useState } from 'react'
import { BreadcrumbComponent } from './breadcrumb'
import { Mail, Phone, User } from 'lucide-react'
import { fetchContactCards } from '@/utils/ContractorContractUtils'

export default function ContractorContacts() {
    const [loading, setLoading] = useState(true)
    const [contactCards, setContactCards] = useState([])

    useEffect(() => {
        if (loading)
            fetchContactCards(setContactCards, setLoading)
    }, [])
    return (
        <div className='w-full h-full overflow-y-auto custom-scroll'>
            <div className='w-full h-24 flex justify-center items-center font-semibold'>
                <BreadcrumbComponent loading={loading} partName={'contractor contacts'} />
            </div>
            <div className='w-full hidden md:flex justify-start items-center font-bold text-2xl'>
                Contractor Contacts 
            </div>
            <div className='w-full h-full md:pt-12 pb-10 flex flex-wrap justify-center gap-4'>
                {
                    contactCards.map((item, index) => (
                        <div className='bg-muted w-[380px] h-[180px] p-6 rounded-lg flex flex-col gap-6 dark:hover:bg-slate-700 hover:bg-slate-200 cursor-pointer' key={index}>
                            <div className='w-full flex justify-start items-center font-bold'>
                                {item.companyTitle}
                            </div>
                            <div className='w-full h-full flex flex-col gap-2'>
                                <div className='w-full h-fit flex justify-between'>
                                    <div className='flex items-center justify-center gap-2 '>
                                        <User size={18} />
                                        <p>
                                            Contact Person
                                        </p>
                                    </div>
                                    <p className='truncate w-30 text-end'>
                                        {item.personName}
                                    </p>
                                </div>
                                <div className='w-full h-fit flex justify-between'>
                                    <div className='flex items-center justify-center gap-2 '>
                                        <Phone size={18} className='rotate-[10deg] transform' />
                                        <p>
                                            Phone Number
                                        </p>
                                    </div>
                                    <p className='truncate w-30 text-end'>
                                        {item.phoneNumber}
                                    </p>
                                </div>
                                <div className='w-full h-fit flex justify-between'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <Mail size={18} />
                                        <p>
                                            Email Address
                                        </p>
                                    </div>
                                    <p className='truncate w-28 text-end'>
                                        {item.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
