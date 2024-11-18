import React, { useEffect, useRef, useState } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';

export default function Sheet({ children, btnText, className }) {
    const [open, setOpen] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target) &&  !event.target.closest('[cmdk-item]')) {
                console.log(divRef.current , event.target)
                setOpen(false)
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    return (
        <>
            <Button variant={'outline'} onClick={() => setOpen(!open)} className={cn(`${open ? 'md:hidden' : 'block'} fill-black`, className)}>
                {btnText}
            </Button>
            <>
                <div
                    className={`bg-[rgba(0,0,0,0.53)] dark:bg-[rgba(255,255,255,0.43)] fixed w-full h-full left-0 ${open ? 'top-0' : 'top-[-2000px]'} md:hidden block transition-all duration-300 z-40`}
                    onClick={() => setOpen(false)}
                ></div>
                <div
                    ref={divRef}
                    className={`md:w-1/4 w-full bg-white dark:bg-black ${open ? 'md:right-0 bottom-0 top-1/2' : 'md:-right-[2000px] -bottom-[2000px]'} right-0 md:top-0 md:rounded-none rounded-t-3xl z-50 fixed h-1/2 md:h-full transition-all duration-500`}
                >
                    {children}
                </div>
            </>
        </>
    );
}
