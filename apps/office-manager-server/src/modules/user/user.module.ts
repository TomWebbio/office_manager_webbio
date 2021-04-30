import { PrismaModule } from './../../common/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserResolver],
  controllers: [UserController],
})
export class UserModule {}
