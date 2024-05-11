import { Controller, UseGuards, Get, Post, Put, Delete, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilmesService } from './filmes.service';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async findAll() {
    return await this.filmesService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Request() req) {
    return await this.filmesService.create(req.body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  async update(@Request() req) {
    return await this.filmesService.update(req.body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async delete(@Request() req) {
    return await this.filmesService.delete(req.body);
  }
}