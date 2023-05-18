import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { SideEffect1, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_forEach: EnumeratorFactory.Signature["forEach"] = <T>(
  effect: SideEffect1<T>,
) => composeLazy(EnumeratorFactory_enumerate<T>(), Enumerator_forEach(effect));

export default EnumeratorFactory_forEach;
