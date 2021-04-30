import { Registration } from './registration.model';
import { Field, ObjectType, HideField, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  email: string;

  @HideField()
  password: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  posts: Registration[];
}
