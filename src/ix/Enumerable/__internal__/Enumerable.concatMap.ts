import { ConcatMap, Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { EnumerableLike } from "../../../ix.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";

const map: Map<EnumerableLike>["map"] = Observable_map;

const Enumerable_concatMap: ConcatMap<EnumerableLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Enumerable_concatAll);

export default Enumerable_concatMap;
