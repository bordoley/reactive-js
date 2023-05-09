import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  Containers,
  ObservableContainers,
  RunnableContainer,
} from "../../types.js";
import Runnable_exhaust from "./Runnable.exhaust.js";

const map: Containers.TypeClass<RunnableContainer>["map"] = Observable_map;

const Runnable_exhaustMap: ObservableContainers.TypeClass<RunnableContainer>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_exhaust);

export default Runnable_exhaustMap;
