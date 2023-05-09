import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { EnumerableContainer } from "../../containers.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";

const map: EnumerableContainer.TypeClass["map"] = Observable_map;

const Enumerable_concatMap: EnumerableContainer.TypeClass["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Enumerable_concatAll);

export default Enumerable_concatMap;
