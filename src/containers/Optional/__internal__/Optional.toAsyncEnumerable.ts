import { compose, none } from "../../../functions.js";
import ReadonlyArray_toAsyncEnumerable from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

const Optional_toAsyncEnumerable = <T>(options?: {
  readonly delay?: number;
}) => {
  const { delay = 0 } = options ?? {};
  const toAsyncEnumerableOptions =
    delay > 0 ? { delay, delayStart: true } : none;

  return compose(
    Optional_toReadonlyArray<T>(),
    ReadonlyArray_toAsyncEnumerable(toAsyncEnumerableOptions),
  );
};

export default Optional_toAsyncEnumerable;
