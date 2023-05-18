import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatWith from "./Enumerator.concatWith.js";

const Enumerator_endWith =
  <T>(...values: readonly T[]) =>
  (observable: EnumeratorLike<T>): EnumeratorLike<T> =>
    pipe(
      observable,
      Enumerator_concatWith<T>(pipe(values, ReadonlyArray_enumerate())),
    );

export default Enumerator_endWith;
