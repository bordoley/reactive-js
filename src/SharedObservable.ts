import Observable_never from "./Observable/__internal__/Observable.never.js";
import { Factory } from "./functions.js";
import {
  Container,
  Container_T,
  Container_type,
  SharedObservableLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: SharedObservableLike<this[typeof Container_T]>;
}

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
