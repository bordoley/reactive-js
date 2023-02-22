import { ConcatMap } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_map from "./Enumerable.map.js";

const Enumerable_concatMap: ConcatMap<EnumerableLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(Enumerable_map, Enumerable_concatAll);

export default Enumerable_concatMap;
