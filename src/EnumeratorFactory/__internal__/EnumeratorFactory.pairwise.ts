import Enumerator_pairwise from "../../Enumerator/__internal__/Enumerator.pairwise.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_pairwise: EnumeratorFactory.Signature["pairwise"] = <
  T,
>() => composeLazy(EnumeratorFactory_enumerate<T>(), Enumerator_pairwise());

export default EnumeratorFactory_pairwise;
