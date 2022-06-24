
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AddStoreArgs {
    title: string;
    price: number;
}

export interface UpdateStoreArgs {
    id?: Nullable<number>;
    title?: Nullable<string>;
    price: number;
}

export interface Store {
    id: number;
    title: string;
    price: number;
}

export interface IQuery {
    index(): string | Promise<string>;
    store(): Store[] | Promise<Store[]>;
    storeId(id: number): Store | Promise<Store>;
}

export interface IMutation {
    createStore(addStoreArgs: AddStoreArgs): string | Promise<string>;
    updateStore(updateStoreArgs: UpdateStoreArgs): string | Promise<string>;
    deleteStore(id: number): string | Promise<string>;
}

type Nullable<T> = T | null;
