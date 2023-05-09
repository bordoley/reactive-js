import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  Containers,
  DeferredContainers,
  RunnableContainer,
} from "../../types.js";
import Runnable_concatAll from "./Runnable.concatAll.js";

const map: Containers.TypeClass<RunnableContainer>["map"] = Observable_map;

const Runnable_concatMap: DeferredContainers.TypeClass<RunnableContainer>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_concatAll);

export default Runnable_concatMap;
