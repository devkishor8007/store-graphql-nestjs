import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AddStoreArgs, UpdateStoreArgs } from './args/add.store.args';
import { Store } from './schema/store.schema';
import { StoreService } from './store.service';

@Resolver(() => Store)
export class StoreResolver {
  constructor(private readonly storeService: StoreService) {}

  @Query(() => [Store], { name: 'store' })
  findAll() {
    return this.storeService.findAll();
  }

  @Query(() => Store, { name: 'storeId' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.storeService.findOne(id);
  }

  @Mutation(() => String, { name: 'createStore' })
  createStore(@Args('addStoreArgs') addStoreArgs: AddStoreArgs) {
    return this.storeService.create(addStoreArgs);
  }

  @Mutation(() => String, { name: 'updateStore' })
  updateStore(@Args('updateStoreArgs') updateStoreArgs: UpdateStoreArgs) {
    return this.storeService.update(updateStoreArgs);
  }

  @Mutation(() => String, { name: 'deleteStore' })
  removeStore(@Args('id', { type: () => Int }) id: number) {
    return this.storeService.remove(id);
  }
}
