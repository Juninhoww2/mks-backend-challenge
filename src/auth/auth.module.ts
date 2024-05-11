import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { DataSourceModule } from '../data-source/data-source.module';
import { UsersModule } from '../users/users.module'; // importe o UsersModule


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    DataSourceModule,
    UsersModule,
    JwtModule.register({
      secret: 'asdsdadfadf22132asd',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}