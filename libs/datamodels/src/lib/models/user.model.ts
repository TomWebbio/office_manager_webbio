import { Registration } from './registration.model';
import {
  Field,
  ObjectType,
  HideField,
  ID,
  InputType,
  PickType,
} from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number;

  email: string;

  @HideField()
  password: string;

  firstName: string;

  lastName: string;

  @Field((type) => [Registration])
  registrations: Registration[];
}

@InputType()
export class CreateUser extends PickType(
  User,
  ['email', 'firstName', 'lastName', 'password'] as const,
  InputType
) {}
