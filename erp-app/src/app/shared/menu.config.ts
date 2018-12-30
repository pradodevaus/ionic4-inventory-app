export const menuConfig = [
    {
        title: 'Home',
        url: '/home',
        icon: 'home',
        isActive: true
    },
    {
        title: 'Invoices',
        url: '',
        icon: 'calculator',
        isActive: true,
        children: [
            {
                title: 'Create Invoice',
                url: '/invoice-create',
                icon: 'add-circle',
                isActive: true,
            },
            {
                title: 'List Invoices',
                url: '/invoice-list',
                icon: 'list-box',
                isActive: true,
            }
        ]
    },
    {
        title: 'Customers',
        url: '',
        icon: 'people',
        isActive: true,
        children: [
            {
                title: 'Create Customer',
                url: '/customer-create',
                icon: 'add-circle',
                isActive: true,
            },
            {
                title: 'List Customers',
                url: '/customer-list',
                icon: 'list-box',
                isActive: true,
            }
        ]
    },
    {
        title: 'Products',
        url: '',
        icon: 'cube',
        isActive: true,
        children: [
            {
                title: 'Create Product',
                url: '/product-create',
                icon: 'add-circle',
                isActive: true,
            },
            {
                title: 'List Product',
                url: '/product-list',
                icon: 'list-box',
                isActive: true,
            }
        ]
    },
    {
        title: 'Vendors',
        url: '',
        icon: 'people',
        isActive: true,
        children: [
            {
                title: 'Create Vendor',
                url: '/vendor-create',
                icon: 'add-circle',
                isActive: true,
            },
            {
                title: 'List Vendor',
                url: '/vendor-list',
                icon: 'list-box',
                isActive: true,
            }
        ]
    },
    {
        title: 'Reports',
        url: '/settings',
        icon: 'trending-up',
        isActive: true
    },
    {
        title: 'Settings',
        url: '/settings',
        icon: 'settings',
        isActive: true
    },
    {
        title: 'User Manual',
        url: '/user-manual',
        icon: 'help-circle',
        isActive: true
    },
    {
        title: 'About Us',
        url: '/about-us',
        icon: 'information-circle',
        isActive: true
    }
];
