import Enumerator_empty from "../../Enumerator/__internal__/Enumerator.empty.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";

const EnumeratorFactory_empty: EnumeratorFactory.Signature["empty"] = <T>() =>
  Enumerator_empty<T>;

export default EnumeratorFactory_empty;
