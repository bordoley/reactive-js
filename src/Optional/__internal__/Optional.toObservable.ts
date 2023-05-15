import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Function1, Optional, compose, none } from "../../functions.js";
import { EnumerableLike, RunnableLike } from "../../types.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

interface OptionalToObservable {
  toObservable<T>(): Function1<Optional<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
  }): Function1<Optional<T>, RunnableLike<T>>;
  toObservable<T>(options?: {
    readonly delay?: number;
  }): Function1<Optional<T>, RunnableLike<T>>;
}

const Optional_toObservable: OptionalToObservable["toObservable"] =
  ((options?: { readonly delay: number }) => {
    const { delay = 0 } = options ?? {};
    const toObservableOptions = delay > 0 ? { delay, delayStart: true } : none;

    return compose(
      Optional_toReadonlyArray(),
      ReadonlyArray_toObservable(
        toObservableOptions as {
          readonly delay: number;
          readonly delayStart?: boolean;
          readonly count?: number;
          readonly start?: number;
        },
      ),
    );
  }) as OptionalToObservable["toObservable"];

export default Optional_toObservable;
