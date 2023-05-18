import Store_create from "./Store/__internal__/Store.create.js";
import Store_toObservable from "./Store/__internal__/Store.toObservable.js";
import { Function1 } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  DisposableLike,
  MulticastObservableLike,
  StoreLike,
  WritableStoreLike,
} from "./types.js";

export interface StoreContainer extends Container {
  readonly [Container_type]?: StoreLike<this[typeof Container_T]>;
}

export type Type = StoreContainer;

export interface StoreModule {
  create<T>(initialValue: T): WritableStoreLike<T> & DisposableLike;

  toObservable<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;
}

export type Signature = StoreModule;

export const create: Signature["create"] = Store_create;
export const toObservable: Signature["toObservable"] = Store_toObservable;
