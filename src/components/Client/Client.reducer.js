import { LOGOUT_FAILURE, LOGOUT_SUCCESS } from "components/Authentication/Authentication.actionConstant";

const DEFAULT_STATE = {
    loading: false,
    data: [
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "zaid Gandhi",
            email: "zaidgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "Ankit Gandhi",
            email: "ankitgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "Amit Gandhi",
            email: "Amitgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "Anshul Gandhi",
            email: "Anshulgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "Bhabhi Gandhi",
            email: "Bhabhigandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
        {
            name: "Dev Gandhi",
            email: "Devgandhi452@gmail.com",
            mobileNumber: '9769040485',
            id: '1'
        },
    ],
    errors: {}
}

const Client = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case LOGOUT_SUCCESS:
        case LOGOUT_FAILURE:
            return {...DEFAULT_STATE}
        default:
            return state;
    }
}

export default Client;