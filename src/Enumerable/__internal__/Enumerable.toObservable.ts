import type * as Enumerable from "../../Enumerable.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";
import { pipe } from "../../functions.js";
import { EnumerableLike, ObserverLike } from "../../types.js";
import Enumerable_observeWith from "./Enumerable.observeWith.js";

const Enumerable_toObservable: Enumerable.Signature["toObservable"] = (<
    T,
  >(options?: {
    delay?: number;
    delayStart?: boolean;
  }) =>
  (enumerable: EnumerableLike<T>) =>
    options?.delay ?? 0 > 0
      ? Runnable_create((observer: ObserverLike<T>) =>
          pipe(enumerable, Enumerable_observeWith<T>(observer, options)),
        )
      : enumerable) as Enumerable.Signature["toObservable"];

export default Enumerable_toObservable;
