import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import React from 'react';

export const bottomNavigation = [
    {
        label: 'Client',
        value: 'clients',
        icon: <ContactsRoundedIcon />
    },
]

export const appRoutes = {
    authentication: {
        login: '/login',
        register: '/register',
        forgotPassword: '/forgotPassword'
    },
    clients: {
        new: '/clients/new',
        index: '/clients/index'
    }
}

export const defaultAuthenticatedRoute = "/clients/index";
export const defaultUnauthenticatedRoute = "/login";