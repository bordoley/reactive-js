import Store_create from "./Store/__internal__/Store.create.js";
import Store_toObservable from "./Store/__internal__/Store.toObservable.js";
import {
  Container,
  Container_T,
  Container_type,
  DisposableLike,
  MulticastableTypeClass,
  StoreLike,
  WritableStoreLike,
} from "./types.js";

export interface StoreContainer extends Container {
  readonly [Container_type]?: StoreLike<this[typeof Container_T]>;
}

export type Type = StoreContainer;

export interface StoreModule extends MulticastableTypeClass<Type> {
  create<T>(initialValue: T): WritableStoreLike<T> & DisposableLike;
}

export type Signature = StoreModule;

export const create: Signature["create"] = Store_create;
export const toObservable: Signature["toObservable"] = Store_toObservable;
