import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity'; // import your entity

@Injectable()
export class SeederService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // inject your repository
  ) {}

  async seedUsers() {
    const user = this.userRepository.create({ /* user data */ });
    await this.userRepository.save(user);
  }

  // add more methods for seeding other tables
}