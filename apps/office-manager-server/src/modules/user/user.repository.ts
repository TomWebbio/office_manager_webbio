import { PrismaService } from './../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      select: {
        email: true,
        name: true,
        id: true,
      },
    });
  }
}
