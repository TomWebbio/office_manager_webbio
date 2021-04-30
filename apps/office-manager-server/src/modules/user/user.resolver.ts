import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUser, User } from '@office-manager-webbio/data-models';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User], { nullable: true })
  async users() {
    return this.userService.findAll();
  }

  @Mutation((returns) => User)
  async addUser(@Args('user') user: CreateUser) {
    return this.userService.create({ ...user });
  }
}
