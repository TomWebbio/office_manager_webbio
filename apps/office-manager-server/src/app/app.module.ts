import { UserModule } from './../modules/user/user.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: '../../schema.gql',
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
