import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { DataSourceModule } from '../data-source/data-source.module';

@Module({
  controllers: [FilmesController],
  imports: [DataSourceModule],
  providers: [FilmesService],
})
export class MoviesModule {}