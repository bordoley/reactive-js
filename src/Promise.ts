import Promise_toObservable from "./Promise/__internal__/Promise.toObservable.js";
import { Function1 } from "./functions.js";
import { PromiseContainer, SharedObservableLike } from "./types.js";

export type Type = PromiseContainer;
export interface Signature {
  toObservable<T>(): Function1<PromiseLike<T>, SharedObservableLike<T>>;
}

export const toObservable: Signature["toObservable"] = Promise_toObservable;
