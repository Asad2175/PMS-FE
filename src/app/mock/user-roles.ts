export const UserMenu: {}[] = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        roles: ['ROLE_AGENT', 'ROLE_SELLER', 'ROLE_BUYER']
    },
    {
        name: 'Add Property',
        url: '/add-property',
        roles: ['ROLE_AGENT', 'ROLE_SELLER']  
    },
    {
        name: 'Advanced Search',
        url: '/search',
        roles: ['ROLE_AGENT', 'ROLE_SELLER']  
    },
    {
        name: 'View All Properties',
        url: '/buyer/view-all',
        roles: ['ROLE_BUYER']  
    }
];