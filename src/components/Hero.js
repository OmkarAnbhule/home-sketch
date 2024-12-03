'use client'
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero({ children }) {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (pathname === '/') {
            setActive(0);
        } else if (pathname === '/sales') {
            setActive(1);
        } else if (pathname.startsWith('/projects')) {
            setActive(2);
        } else if (pathname.startsWith('/settings')) {
            setActive(3);
        } else if (pathname === '/inbox') {
            setActive(4);
        } else {
            setActive(0);
        }
    }, [pathname])


    return (
        <div className="w-full h-screen flex">
            <div className={`z-10 absolute md:relative backdrop-blur-xl md:backdrop-blur-none bg-[rgba(0,0,0,.42)] md:w-fit w-full h-full md:bg-transparent transition-all duration-500 ${open ? 'translate-x-0 md:translate-x-0' : '-translate-x-[2000px] md:translate-x-0'}`} onClick={() => setOpen(false)}>
                <Navbar setOpen={setOpen} active={active} setActive={setActive} />
            </div>
            <div className="w-full h-full flex flex-col items-center select-none">
                <Header index={active} setOpen={setOpen} />
                <Separator className={'hidden md:block w-[99%]'} />
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 500 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 500 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        className='w-full h-fit flex justify-center items-center overflow-hidden'
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
