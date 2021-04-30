import { Field, ObjectType, ID } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
export class Registration {
  @Field((type) => ID)
  id: number;

  @Field()
  date: Date;

  @Field()
  createdAt: Date;

  @Field()
  user: User;
}
