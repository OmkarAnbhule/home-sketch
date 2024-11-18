import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";
import { Loader } from "lucide-react";
import { BreadCrumbSkeleton } from "./ui/Skeleton";

export function BreadcrumbComponent({ partName, loading }) {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);
    if (loading) return <Loader />

    const breadcrumbItems = pathParts.map((part, index) => {
        const isLast = index === pathParts.length - 1;
        const href = `/${pathParts.slice(0, index + 1).join("/")}`;
        return (
            <React.Fragment key={part}>
                <BreadcrumbItem>
                    <BreadcrumbLink href={href} className="capitalize text-lg">
                        {isLast ? partName : part}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
        );
    });

    if (loading)
        return <BreadCrumbSkeleton />;

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbItems}
            </BreadcrumbList>
        </Breadcrumb>
    );
}