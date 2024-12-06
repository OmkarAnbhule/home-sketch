import React, { useState } from 'react';
import { Input } from './ui/input';

export default function Notes({ input }) {
    const [note, setNote] = useState('');
    const [count, setCount] = useState(0)


    const handleChange = (e) => {
        if (e.target.value.length <= 150) {
            setNote(e.target.value);
            setCount(e.target.value.length)
        }
    };

    return (
        <>
            {
                input ? (
                    <div className='w-full md:min-h-40 flex items-start p-4 flex-col gap-4'>
                        <div className='w-full flex justify-between'>
                            <p className='text-xl font-semibold'>
                                Add Note
                            </p>
                            <p className='text-muted-foreground'>
                                {count}/150
                            </p>
                        </div>
                        <Input
                            type="text"
                            value={note}
                            onChange={handleChange}
                            className='w-full md:text-xl md:pt-5 md:pb-20'
                        />
                    </div>
                )
                    :
                    (
                        <div className='w-full flex items-start flex-col gap-1'>
                            <div className='w-full flex justify-between'>
                                <p className='text-muted-foreground text-sm font-semibold'>
                                    Note
                                </p>
                                <p className='text-muted-foreground text-sm'>
                                    {count}/150
                                </p>
                            </div>
                            <Input
                                type="text"
                                value={note}
                                onChange={handleChange}
                                className='w-full'
                            />
                        </div>

                    )
            }
        </>
    );
}
