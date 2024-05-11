import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from 'nestjs-redis';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database.module';
import { DataSourceModule } from './data-source/data-source.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';

@Module({
  imports: [
    RedisModule.register({
      url: 'redis://:nCljNK0ZcrH22jbTVOb1dGXgYtvx6sok@redis-17240.c308.sa-east-1-1.ec2.redns.redis-cloud.com:17240',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres', // the type of the database
      host: 'localhost', // the host of the database
      port: 5432, // the port on which the database is running
      username: 'root', // the username for the database
      password: 'root', // the password for the database
      database: 'test', // the name of the database
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      entities: [__dirname + '/../**/*.entity{.ts,.js}', User], // the glob pattern to find your entities
      synchronize: true, // if true, TypeORM will automatically create database tables on every application launch
    }),
    AuthModule,
    DatabaseModule,
    DataSourceModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}