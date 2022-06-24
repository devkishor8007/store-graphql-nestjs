import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreEntity } from './entities/store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreEntity])],
  providers: [StoreResolver, StoreService],
})
export class StoreModule {}
