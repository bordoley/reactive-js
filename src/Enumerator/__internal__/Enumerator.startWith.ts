import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatWith from "./Enumerator.concatWith.js";

const Enumerator_startWith =
  <T>(...values: readonly T[]) =>
  (enumerator: EnumeratorLike<T>) =>
    pipe(
      values,
      ReadonlyArray_enumerate(),
      Enumerator_concatWith<T>(enumerator),
    );

export default Enumerator_startWith;
