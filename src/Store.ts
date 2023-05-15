import Store_create from "./Store/__internal__/Store.create.js";
import Store_toSharedObservable from "./Store/__internal__/Store.toSharedObservable.js";
import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { StoreContainer, WritableStoreLike } from "./types.js";

export type Type = StoreContainer;

export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {
  create<T>(initialValue: T): WritableStoreLike<T>;
}

export const create: Signature["create"] = Store_create;
export const toSharedObservable: Signature["toSharedObservable"] =
  Store_toSharedObservable;
