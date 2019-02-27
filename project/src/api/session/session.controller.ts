import { Controller, Get, Post, Param, Req , Body} from '@nestjs/common';
import { UserService } from '../user/user.service';
@Controller('api/v1/session')
export class SessionController {
    constructor(private user: UserService) {
        console.log('Running V1Controller');
    }
    @Get('user')
    readSession() {
        return '1.0.0';
    }
    @Post(':action')
    AddModifySession(@Param() params, @Req() req, @Body() user) {
        switch( params.action ) {
            case 'register':
                return this.user.registerUser(req, user);
            case 'resend-confirm-email':
                 return this.user.resendConfirmation(user);
            case 'confirm-account':
                return this.user.confirmAccount(user);
            case 'login':
                return this.user.loginUser( user );
            case 'recover-password':
                return this.user.recoverPassword( user );
            case 'is-valid-token':
                return this.user.isValidToken( user );
            case 'change-password':
                return this.user.changePassword( user );
            case 'update-password':
                return this.user.updatePassword( user );
            case 'logout':
                return this.user.logout( user );
            case 'log-off-all-devices':
                return this.user.logoutAllDevices( user );
            default:
                return '';
        }
    }
}
