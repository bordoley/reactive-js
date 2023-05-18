import Enumerator_endWith from "../../Enumerator/__internal__/Enumerator.endWith.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_endWith: EnumeratorFactory.Signature["endWith"] = <T>(
  value: T,
  ...tail: readonly T[]
) =>
  composeLazy(
    EnumeratorFactory_enumerate<T>(),
    Enumerator_endWith(value, ...tail),
  );

export default EnumeratorFactory_endWith;
