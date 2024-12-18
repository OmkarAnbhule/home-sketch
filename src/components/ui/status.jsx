import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import React from 'react'

const statusVariants = cva(
    "rounded-3xl w-fit min-w-32 text-center border-2 font-semibold font-sans px-3.5 py-1.5",
    {
        variants: {
            variant: {
                inProgress:
                    "bg-[#F5D451] text-black",
                notStarted:
                    "dark:bg-muted bg-gray-500 text-white",
                onHold:
                    "bg-black text-white",
                completed:
                    "bg-[#51CE60] text-black",
            }
        },
        defaultVariants: {
            variant: "inProgress",
        },
    }
)

const getText = (status) => {
    switch (status) {
        case "inProgress":
            return "In Progress"
        case "notStarted":
            return "Not Started"
        case "onHold":
            return "On Hold"
        case "completed":
            return "Completed"
        default:
            return "Unknown"
    }
}

const Status = ({ className, variant = 'inProgress', ...props }) => {
    return (
        <span
            className={cn(statusVariants({ variant, className }))}
            {...props}
        >
            {getText(variant)}
        </span>
    )
}

export { Status }