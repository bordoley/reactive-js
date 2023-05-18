import Enumerator_first from "../../Enumerator/__internal__/Enumerator.first.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { compose } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_first: EnumeratorFactory.Signature["first"] = <T>() =>
  compose(EnumeratorFactory_enumerate<T>(), Enumerator_first());

export default EnumeratorFactory_first;
