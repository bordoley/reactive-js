import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import type * as Enumerator from "../../Enumerator.js";
import { Function1, compose } from "../../functions.js";
import { EnumeratorLike } from "../../types.js";
import Enumerator_concatAll from "./Enumerator.concatAll.js";

const Enumerator_concatMap: Enumerator.Signature["concatMap"] = <TA, TB>(
  selector: Function1<TA, EnumeratorLike<TB>>,
) => compose(Enumerator_map(selector), Enumerator_concatAll());

export default Enumerator_concatMap;
