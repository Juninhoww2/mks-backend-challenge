import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceService } from './data-source.service';
import { DataSource } from './data-source.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataSource])],
  providers: [DataSourceService],
  exports: [DataSourceService],
})
export class DataSourceModule {}