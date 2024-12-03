export const DisplayCardSkeleton = () => {
    return (
        <div className='flex  justify-center p-4 rounded-xl items-center border-2 gap-2 w-full md:flex-row flex-col h-fit md:h-82 snap-center animate-pulse'>
            <div className='w-full md:w-1/3 h-80 rounded-2xl p-5 flex flex-col gap-3 bg-[rgba(14,14,15,0.05)] dark:bg-[rgba(155,155,155,0.05)] transition-all duration-300 '>
                <div className='w-full h-fit flex justify-between items-center'>
                    <div className='w-1/3 h-6 bg-gray-300 dark:bg-gray-700 rounded-md'></div>
                    <div className='w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-xl'></div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    {[...Array(3)].map((_, idx) => (
                        <div key={idx} className='w-full h-8 bg-gray-300 dark:bg-gray-700 rounded-md'></div>
                    ))}
                </div>
                <div className='grid place-items-center grid-cols-2 grid-rows-2 gap-2'>
                    {[...Array(4)].map((_, idx) => (
                        <div key={idx} className='w-full h-8 bg-gray-300 dark:bg-gray-700 rounded-md'></div>
                    ))}
                </div>
                <div className='w-full h-full flex justify-start gap-4'>
                    <div className='w-1/4 h-6 bg-gray-300 dark:bg-gray-700 rounded-md'></div>
                    <div className='w-1/4 h-6 bg-gray-300 dark:bg-gray-700 rounded-md'></div>
                </div>
            </div>
            <div className='w-full md:w-1/3 min-h-80 rounded-2xl bg-gray-200 dark:bg-gray-700 relative' >
                <div className='absolute bg-gray-300 dark:bg-gray-600 h-8 w-8 rounded-xl bottom-2 right-2' />
            </div>
            <div className='w-full md:w-1/3 min-h-80 rounded-2xl bg-gray-200 dark:bg-gray-700 relative'>
                <div className='absolute bg-gray-300 dark:bg-gray-600 h-8 w-8 rounded-xl left-2 top-1/2 transform -translate-y-1/2' />
                <div className='absolute bg-gray-300 dark:bg-gray-600 h-8 w-8 rounded-xl right-2 top-1/2 transform -translate-y-1/2' />
                <div className='absolute bg-gray-300 dark:bg-gray-600 h-8 w-8 rounded-xl bottom-2 right-2' />
                <div className='absolute bg-gray-300 dark:bg-gray-600 h-8 w-8 rounded-xl top-2 right-2' />
            </div>
        </div>
    );
}

export const BreadCrumbSkeleton = () => {
    return <div className="h-6 w-[250px] bg-muted-foreground/15 animate-pulse" />;
}