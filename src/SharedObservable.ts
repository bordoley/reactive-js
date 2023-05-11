import Observable_never from "./Observable/__internal__/Observable.never.js";
import { Factory } from "./functions.js";
import { SharedObservableContainer, SharedObservableLike } from "./types.js";

export type Type = SharedObservableContainer;

export interface Signature {
  compute<T>(
    computation: Factory<T>,
    options?: {
      mode?: "batched" | "combine-latest";
    },
  ): SharedObservableLike<T>;

  never<T>(): SharedObservableLike<T>;
}

export const never: Signature["never"] = Observable_never;
