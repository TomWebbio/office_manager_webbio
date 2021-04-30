import { UserService } from './user.service';
import { Parent, Query, Resolver } from '@nestjs/graphql';
import { User } from '../../models/user.model';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User], { nullable: true })
  async allUsers() {
    return this.userService.findAll();
  }
}
