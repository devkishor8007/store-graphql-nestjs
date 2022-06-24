import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddStoreArgs, UpdateStoreArgs } from './args/add.store.args';
import { StoreEntity } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(StoreEntity)
    public readonly storeRepository: Repository<StoreEntity>,
  ) {}

  async create(addStoreArgs: AddStoreArgs): Promise<string> {
    const book: StoreEntity = new StoreEntity();
    book.title = addStoreArgs.title;
    book.price = addStoreArgs.price;
    await this.storeRepository.save(book);
    return 'Book has been successfully saved';
  }

  async findAll(): Promise<StoreEntity[]> {
    const stores = await this.storeRepository.find();
    return stores;
  }

  async findOne(id: number): Promise<StoreEntity> {
    const store = await this.storeRepository.findOne({ where: { id: id } });
    return store;
  }

  async update(updateStoreArgs: UpdateStoreArgs): Promise<string> {
    const book: StoreEntity = await this.storeRepository.findOne({
      where: {
        id: updateStoreArgs.id,
      },
    });
    book.title = updateStoreArgs.title;
    book.price = updateStoreArgs.price;
    await this.storeRepository.save(book);
    return 'Book has been successfully saved';
  }

  async remove(id: number): Promise<string> {
    await this.storeRepository.delete(id);
    return 'store is delete';
  }
}
