import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatAll from "./Enumerator.concatAll.js";

const Enumerator_concatMany = <T>(enumerators: readonly EnumeratorLike<T>[]) =>
  pipe(enumerators, ReadonlyArray_enumerate(), Enumerator_concatAll());

export default Enumerator_concatMany;
