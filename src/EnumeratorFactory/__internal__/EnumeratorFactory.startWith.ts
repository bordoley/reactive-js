import Enumerator_startWith from "../../Enumerator/__internal__/Enumerator.startWith.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_startWith: EnumeratorFactory.Signature["startWith"] = <
  T,
>(
  value: T,
  ...tail: readonly T[]
) =>
  composeLazy(
    EnumeratorFactory_enumerate<T>(),
    Enumerator_startWith(value, ...tail),
  );

export default EnumeratorFactory_startWith;
