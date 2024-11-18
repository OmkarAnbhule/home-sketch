import { ContractorIcon, PasswordIcon, ProfileIcon, QuotationIcon, SignatureIcon, UsersIcon } from "@/components/Icons";

export const settingsItems = [
    {
        title: "Contractor Contacts",
        description: 'Provide personal details and how we can reach you',
        icon: (
            <ContractorIcon />
        ),
        href: 'contractor-contacts'
    },
    {
        title: "Quotation Template",
        description: 'View and manage the apps connected to Metrix.',
        icon: (
            <QuotationIcon />
        ),
        href: 'quotation-template'
    },
    {
        title: "Signature Template",
        description: 'Manage your personal data, connected services, and data sharing settings',
        icon: (
            <SignatureIcon />
        ),
        href: 'signature-template'
    },
    {
        title: "Change Password",
        description: 'Update your password and secure your account',
        icon: (
            <PasswordIcon />
        ),
        href: 'change-password'
    },
    {
        title: "Accounts",
        description: 'Manage billing, view invoices, and change your plan.',
        icon: (
            <ProfileIcon />
        ),
        href: 'accounts'
    },
    {
        title: "Users",
        description: 'Waves audius eCash hive polygon maker TRON harmony harmony eCash.',
        icon: (
            <UsersIcon />
        ),
        href: 'users'
    },
]