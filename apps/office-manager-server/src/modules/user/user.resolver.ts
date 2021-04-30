import { UserService } from './user.service';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@office-manager-webbio/datamodels';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User], { nullable: true })
  async allUsers() {
    return this.userService.findAll();
  }
}
