import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Registration {
  @Field((type) => ID)
  id: number;

  @Field()
  date: Date;

  @Field()
  createdAt: Date;
}
