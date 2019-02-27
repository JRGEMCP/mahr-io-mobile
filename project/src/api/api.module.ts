import { Module, Controller } from '@nestjs/common';
import { SessionController } from './session/session.controller';
import { UserService } from './user/user.service';
@Module({
    controllers: [SessionController],
    providers: [UserService]
})
export class ApiModule {}
