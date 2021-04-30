import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUser, User } from '@office-manager-webbio/datamodels';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User], { nullable: true })
  async users() {
    return this.userService.findAll();
  }

  @Mutation((returns) => User)
  async addUser(@Args('user') user: CreateUser) {
    return this.userService.create({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.lastName,
    });
  }
}
