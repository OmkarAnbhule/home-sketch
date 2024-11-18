import { AdminIcon, DisplayCenterIcon, InboxIcon, ProjectIcon, SalesIcon, SettingsIcon } from "@/components/Icons";

export const navItems = [
    {
        label: "Display Center",
        svg: (
            <DisplayCenterIcon />
        ),
        href: '/'
    },
    {
        label: "Sales",
        svg: (
            <SalesIcon />
        ),
        href: '/sales'
    },
    {
        label: "Projects",
        svg: (
            <ProjectIcon />
        ),
        href: '/projects'
    },
    {
        label: "Settings",
        svg: (
            <SettingsIcon />
        ),
        href: '/settings'
    },
    {
        label: "Inbox",
        svg: (
            <InboxIcon />
        ),
        href: '/inbox'
    },
    {
        label: "Admin Panel",
        svg: (
            <AdminIcon />
        ),
        href: '/admin'
    }
]