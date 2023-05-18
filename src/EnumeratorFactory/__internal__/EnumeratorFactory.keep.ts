import Enumerator_keep from "../../Enumerator/__internal__/Enumerator.keep.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Predicate, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_keep: EnumeratorFactory.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => composeLazy(EnumeratorFactory_enumerate<T>(), Enumerator_keep(predicate));

export default EnumeratorFactory_keep;
