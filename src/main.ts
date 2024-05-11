import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Remove the file extension
import { SeederService } from './seeder/seeder.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const seeder = app.get(SeederService);
  await seeder.seedUsers();
  // call other seeding methods
  await app.close();
}
bootstrap();
