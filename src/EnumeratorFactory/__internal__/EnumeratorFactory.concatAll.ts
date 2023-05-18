import Enumerator_concatMap from "../../Enumerator/__internal__/Enumerator.concatMap.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_concatAll: EnumeratorFactory.Signature["concatAll"] = <
  T,
>() =>
  composeLazy(
    EnumeratorFactory_enumerate<EnumeratorFactoryLike<T>>(),
    Enumerator_concatMap(EnumeratorFactory_enumerate<T>()),
  );

export default EnumeratorFactory_concatAll;
