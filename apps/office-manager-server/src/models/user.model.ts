import { Registration } from './registration.model';
import { Field, ObjectType, HideField, ID } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  @Field()
  email: string;

  @HideField()
  password: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field((type) => [Registration])
  registrations: Registration[];
}
