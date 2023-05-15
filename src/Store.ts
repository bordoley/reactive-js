import Store_create from "./Store/__internal__/Store.create.js";
import Store_toObservable from "./Store/__internal__/Store.toObservable.js";
import { AsynchronousContainerBaseTypeClass } from "./type-classes.js";
import { StoreContainer, WritableStoreLike } from "./types.js";

export type Type = StoreContainer;

export interface Signature extends AsynchronousContainerBaseTypeClass<Type> {
  create<T>(initialValue: T): WritableStoreLike<T>;
}

export const create: Signature["create"] = Store_create;
export const toObservable: Signature["toObservable"] = Store_toObservable;
