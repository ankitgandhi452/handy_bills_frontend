const pageNames = {
    client: {
        new: 'New Client',
        edit: 'Edit Client',
        show: 'Client Show',
        index: 'Client Management'
    }
}

export const getPageName = (container, type) => (
    pageNames[container][type]
)