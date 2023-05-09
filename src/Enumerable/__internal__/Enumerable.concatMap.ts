import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  Containers,
  DeferredContainers,
  EnumerableContainer,
} from "../../containers.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";

const map: Containers.TypeClass<EnumerableContainer>["map"] = Observable_map;

const Enumerable_concatMap: DeferredContainers.TypeClass<EnumerableContainer>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Enumerable_concatAll);

export default Enumerable_concatMap;
