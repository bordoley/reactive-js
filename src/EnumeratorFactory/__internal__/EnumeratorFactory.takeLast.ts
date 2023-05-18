import Enumerator_takeLast from "../../Enumerator/__internal__/Enumerator.takeLast.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_takeLast: EnumeratorFactory.Signature["takeLast"] = <
  T,
>(options?: {
  readonly count?: number;
}) =>
  composeLazy(EnumeratorFactory_enumerate<T>(), Enumerator_takeLast(options));

export default EnumeratorFactory_takeLast;
