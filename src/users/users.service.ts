// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
) {}

async create(username: string, password: string): Promise<User> {
    const user = new User();
    user.username = username;
    user.password = await bcrypt.hash(password, 10);
    return this.usersRepository.save(user);
}

findByUsername(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username } });
}

  // Adicione mais métodos conforme necessário
}