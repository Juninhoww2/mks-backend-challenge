import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly redisService: RedisService) {}

  async get(key: string): Promise<string> {
    const client = this.redisService.getClient();
    return new Promise((resolve, reject) => {
      client.get(key, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  async set(key: string, value: string): Promise<void> {
    const client = this.redisService.getClient();
    client.set(key, value);
  }

}
