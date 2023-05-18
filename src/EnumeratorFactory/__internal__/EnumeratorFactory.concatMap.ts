import type * as EnumeratorFactory from "../../EnumeratorFactory.js";
import { Function1, compose } from "../../functions.js";
import { EnumeratorFactoryLike } from "../../types.js";
import EnumeratorFactory_concatAll from "./EnumeratorFactory.concatAll.js";
import EnumeratorFactory_map from "./EnumeratorFactory.map.js";

const EnumeratorFactory_concatMap: EnumeratorFactory.Signature["concatMap"] = <
  TA,
  TB,
>(
  selector: Function1<TA, EnumeratorFactoryLike<TB>>,
) => compose(EnumeratorFactory_map(selector), EnumeratorFactory_concatAll());

export default EnumeratorFactory_concatMap;
