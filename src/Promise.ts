import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";
import { Function1 } from "./functions.js";
import { MulticastObservableLike, PromiseContainer } from "./types.js";

export type Type = PromiseContainer;

export interface PromiseModule {
  toObservable<T>(): Function1<PromiseLike<T>, MulticastObservableLike<T>>;
}

export type Signature = PromiseModule;

export const toObservable: Signature["toObservable"] = Promise_toObservable;
