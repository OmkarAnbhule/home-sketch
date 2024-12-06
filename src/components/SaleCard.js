import React from 'react'
import { Status } from './ui/status'
import { Calendar, CircleDollarSign, Edit, Flame, House, Layers, Mail, MapPin, Newspaper, Phone, Route, User } from 'lucide-react'

export default function SaleCard({ item }) {
    return (
        <div className='w-full h-fit border-2 flex flex-col md:flex-row rounded-lg'>
            <div className='w-full md:w-1/2 h-fit flex flex-col gap-4 p-5'>
                <div className='w-full h-1/2 bg-muted rounded-lg p-3'>
                    <div className='flex w-full justify-between items-center px-2 mb-3 py-3 border-b-2'>
                        <p className='font-semibold'>Quote</p>
                        <Status variant={item.status} />
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Newspaper size={18} />
                            <p>Quote Number</p>
                        </div>
                        <p className='font-[600]'>{item.QuoteNumber}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Calendar size={18} />
                            <p>Quote Date</p>
                        </div>
                        <p className='font-[600]'>{item.date.split('T')[0].replaceAll('-', '/')}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <CircleDollarSign size={18} />
                            <p>Total House Cost</p>
                        </div>
                        <p className='font-[600]'>{'1,00,000'}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <User size={18} />
                            <p>Builder</p>
                        </div>
                        <p className='font-[600]'>{'Lorem Ipsum Doer'}</p>
                    </div>
                </div>
                <div className='w-full h-1/2 bg-muted rounded-lg p-3'>
                    <div className='flex w-full justify-between items-center px-2 mb-3 py-3 border-b-2'>
                        <p className='font-semibold'>Owner Contact</p>
                        <div className='flex items-center gap-2 '>
                            <Edit size={18} />
                            Edit
                        </div>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <User size={18} />
                            <p>Full Name</p>
                        </div>
                        <p className='font-[600]'>{item.name}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <House size={18} />
                            <p>Address</p>
                        </div>
                        <p className='font-[600]'>{item.address}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Mail size={18} />
                            <p>Email</p>
                        </div>
                        <p className='font-[600]'>{'john@example.com'}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Phone size={18} />
                            <p>Contact</p>
                        </div>
                        <p className='font-[600]'>{item.contactnumber}</p>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-full flex flex-col gap-4 p-5'>
                <div className='w-full h-full bg-muted rounded-lg p-3'>
                    <div className='flex w-full justify-between items-center px-2 mb-4 py-3 border-b-2'>
                        <p className='font-semibold'>Property Information</p>
                        <div className='flex items-center gap-2 '>
                            <Edit size={18} />
                            Edit
                        </div>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <MapPin size={18} />
                            <p>Address</p>
                        </div>
                        <p className='font-[600]'>{item.address}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Layers size={18} />
                            <p>Land Width</p>
                        </div>
                        <p className='font-[600]'>{item.displayCenterId.width}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Layers size={18} />
                            <p>Land Depth</p>
                        </div>
                        <p className='font-[600]'>{item.displayCenterId.depth}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Layers size={18} />
                            <p>Total Land Size</p>
                        </div>
                        <p className='font-[600]'>{item.displayCenterId.area} sq.</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Route size={18} />
                            <p>Drive way</p>
                        </div>
                        <p className='font-[600]'>{'Left/Right/Not Sure'}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <User size={18} />
                            <p>Developer</p>
                        </div>
                        <p className='font-[600]'>{'Mambourin Estate'}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Flame size={18} />
                            <p>Bush Fire</p>
                        </div>
                        <p className='font-[600]'>{'Yes/no'}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Calendar size={18} />
                            <p>Title Date</p>
                        </div>
                        <p className='font-[600]'>{'2025/10/10'}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Calendar size={18} />
                            <p>Settlement Date</p>
                        </div>
                        <p className='font-[600]'>{'2025/10/10'}</p>
                    </div>
                    <div className='w-full flex justify-between border-b-2 px-2 py-3'>
                        <div className='flex gap-2 items-center'>
                            <Layers size={18} />
                            <p>Land Type</p>
                        </div>
                        <p className='font-[600]'>{'Regular/irregular/corner'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
