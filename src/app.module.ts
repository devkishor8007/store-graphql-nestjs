import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      installSubscriptionHandlers: true,
      // code first ways
      // src/schema.graphql will be auto generated
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // to use - install ts-morph
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      // add your own password of pg database
      password: '<your-pg-password-here',
      // add you database name
      database: '<your-db-name-here>',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    StoreModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
