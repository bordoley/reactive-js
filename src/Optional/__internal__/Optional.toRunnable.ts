import ReadonlyArray_toRunnable from "../../ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { Function1, Optional, compose, none } from "../../functions.js";
import { EnumerableLike, RunnableLike } from "../../types.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

interface OptionalToRunnable {
  toRunnable<T>(): Function1<Optional<T>, EnumerableLike<T>>;
  toRunnable<T>(options: {
    readonly delay: number;
  }): Function1<Optional<T>, RunnableLike<T>>;
  toRunnable<T>(options?: {
    readonly delay?: number;
  }): Function1<Optional<T>, RunnableLike<T>>;
}

const Optional_toRunnable: OptionalToRunnable["toRunnable"] = ((options?: {
  readonly delay: number;
}) => {
  const { delay = 0 } = options ?? {};
  const toRunnableOptions = delay > 0 ? { delay, delayStart: true } : none;

  return compose(
    Optional_toReadonlyArray(),
    ReadonlyArray_toRunnable(
      toRunnableOptions as {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
      },
    ),
  );
}) as OptionalToRunnable["toRunnable"];

export default Optional_toRunnable;
