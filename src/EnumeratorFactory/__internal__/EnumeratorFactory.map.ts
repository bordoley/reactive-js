import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Function1, composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";

const EnumeratorFactory_map: EnumeratorFactory.Signature["map"] = <TA, TB>(
  selector: Function1<TA, TB>,
) => composeLazy(EnumeratorFactory_enumerate<TA>(), Enumerator_map(selector));

export default EnumeratorFactory_map;
