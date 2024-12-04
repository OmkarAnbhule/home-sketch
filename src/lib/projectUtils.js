import { Cctv, Droplets, Home, Mail, Move, Phone, Star, User, UserCog, UserPen } from "lucide-react"

export const OwnerData = [
    {
        'title': 'Full Name',
        'name': 'John Doe',
        svg: (
            <User size={16} />
        )
    },
    {
        'title': 'Address',
        'name': 'Full address for verification',
        svg: (
            <Home size={16} />
        )
    },
    {
        'title': 'Email',
        'name': 'john@example.com',
        svg: (
            <Mail size={16} />
        )
    },
    {
        'title': 'Contact',
        'name': '393939843984',
        svg: (
            <Phone size={16} />
        )
    }
]

export const ContractorsData = [
    {
        'title': 'Geotech Engineer',
        'name': 'ABH Soil Test',
        svg: (
            <UserCog size={16} />
        )
    },
    {
        'title': 'Structual Engineer',
        'name': 'Fusion Engineering',
        svg: (
            <UserCog size={16} />
        )
    },
    {
        'title': 'Agent Name',
        'name': 'Lorem Ipsum',
        svg: (
            <UserPen size={16} />
        )
    },
    {
        'title': 'Energy Rator',
        'name': 'Lorem Ipsum',
        svg: (
            <Star size={16} />
        )
    },
    {
        'title': 'Surveyor',
        'name': 'West Side Building Surveing',
        svg: (
            <Cctv size={16} />
        )
    }
]

export const Authority = [
    {
        'title': 'Developer',
        'name': 'Mambourin Estate',
        svg: (
            <UserCog size={16} />
        )
    },
    {
        'title': 'Council',
        'name': 'Wyndham Council',
        svg: (
            <Move size={16} />
        )
    },
    {
        'title': 'Water Authority',
        'name': 'Greater Western Water',
        svg: (
            <Droplets size={16} />
        )
    }
]