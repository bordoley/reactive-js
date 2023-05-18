import Enumerator_takeFirst from "../../Enumerator/__internal__/Enumerator.takeFirst.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_takeFirst: EnumeratorFactory.Signature["takeFirst"] = <
  T,
>(options?: {
  readonly count?: number;
}) =>
  composeLazy(EnumeratorFactory_enumerate<T>(), Enumerator_takeFirst(options));

export default EnumeratorFactory_takeFirst;
