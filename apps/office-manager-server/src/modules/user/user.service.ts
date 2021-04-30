import { PrismaService } from './../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        registrations: true,
      },
    });
    return users;
  }

  async create(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: user,
    });
  }
}
