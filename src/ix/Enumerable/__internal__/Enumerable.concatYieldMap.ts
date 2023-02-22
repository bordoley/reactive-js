import { ConcatYieldMap } from "../../../containers.js";

import Container_concatYieldMap from "../../../containers/Container/__internal__/Container.concatYieldMap.js";
import Iterable_toEnumerable from "../../../containers/Iterable/__internal__/Iterable.toEnumerable.js";
import { EnumerableLike } from "../../../ix.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
import Enumerable_map from "./Enumerable.map.js";

const Enumerable_concatYieldMap: ConcatYieldMap<EnumerableLike>["concatYieldMap"] =
  /*@__PURE__*/ Container_concatYieldMap(
    Enumerable_concatAll,
    Iterable_toEnumerable,
    Enumerable_map,
  );

export default Enumerable_concatYieldMap;
