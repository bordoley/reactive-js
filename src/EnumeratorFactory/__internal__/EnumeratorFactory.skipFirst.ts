import Enumerator_skipFirst from "../../Enumerator/__internal__/Enumerator.skipFirst.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_skipFirst: EnumeratorFactory.Signature["skipFirst"] = <
  T,
>(options?: {
  readonly count?: number;
}) =>
  composeLazy(EnumeratorFactory_enumerate<T>(), Enumerator_skipFirst(options));

export default EnumeratorFactory_skipFirst;
