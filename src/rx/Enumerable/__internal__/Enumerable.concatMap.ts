import { ConcatMap, Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { EnumerableContainerLike } from "../../../rx.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";

const map: Map<EnumerableContainerLike>["map"] = Observable_map;

const Enumerable_concatMap: ConcatMap<EnumerableContainerLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Enumerable_concatAll);

export default Enumerable_concatMap;
