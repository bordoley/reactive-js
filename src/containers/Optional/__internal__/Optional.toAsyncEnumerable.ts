import { compose, none } from "../../../functions.js";
import ReadonlyArray_toAsyncEnumerable from "../../ReadonlyArray/__internal__/ReadonlyArray.toAsyncEnumerable.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

const Optional_toAsyncEnumerable = (options?: { delay: number }) => {
  const { delay = 0 } = options ?? {};
  const toAsyncEnumerableOptions =
    delay > 0 ? { delay, delayStart: true } : none;

  return compose(
    Optional_toReadonlyArray(),
    ReadonlyArray_toAsyncEnumerable(toAsyncEnumerableOptions),
  );
};

export default Optional_toAsyncEnumerable;
