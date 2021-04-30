import { UserRepository } from './user.repository';
import { PrismaModule } from './../../common/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
