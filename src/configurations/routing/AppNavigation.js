import ContactsRoundedIcon from '@material-ui/icons/ContactsRounded';
import React from 'react';

export const bottomNavigation = [
    {
        label: 'Client',
        value: 'clients',
        icon: <ContactsRoundedIcon />
    },
]

export const defaultAuthenticatedRoute = "/clients/index";
export const defaultUnauthenticatedRoute = "/login";