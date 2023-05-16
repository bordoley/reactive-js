import Store_create from "./Store/__internal__/Store.create.js";
import Store_toObservable from "./Store/__internal__/Store.toObservable.js";
import { Function1 } from "./functions.js";
import {
  SharedObservableLike,
  StoreContainer,
  StoreLike,
  WritableStoreLike,
} from "./types.js";

export type Type = StoreContainer;

export interface Signature {
  create<T>(initialValue: T): WritableStoreLike<T>;

  toObservable<T>(): Function1<StoreLike<T>, SharedObservableLike<T>>;
}

export const create: Signature["create"] = Store_create;
export const toObservable: Signature["toObservable"] = Store_toObservable;
