import { Injectable } from '@nestjs/common';

export interface User {
    email: string,
    name: string,
    roles: Array<String>
}

@Injectable()
export class UserService {
    getUser() : User {
        return {
            email: 'a',
            name: 'b',
            roles: ['active']
        };
    }
    registerUser( req, user) : User {
        /// Meat

        return {
            email: 'a',
            name: 'b',
            roles: ['active']
        };
    }
    resendConfirmation( user ) {
        return '';
    }
    confirmAccount( user ) {
        return {active: false};
    }
    loginUser(user) : User {
        return {
            email: 'a',
            name: 'b',
            roles: ['active']
        };
    }
    recoverPassword(user) {
        return '';
    }
    isValidToken(user) {
        return {valid: true};
    }
    changePassword(user) : User {
        return {
            email: 'a',
            name: 'b',
            roles: ['active']
        };
    }
    updatePassword(user) {
        return '';
    }
    logout(user) {
        return '';
    }
    logoutAllDevices(user) {
        return '';
    }
    deleteUser(user) {
        return '';
    }
}
