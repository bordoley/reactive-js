import Enumerator_last from "../../Enumerator/__internal__/Enumerator.last.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_last: EnumeratorFactory.Signature["last"] = <T>() =>
  compose(EnumeratorFactory_enumerate<T>(), Enumerator_last());

export default EnumeratorFactory_last;
