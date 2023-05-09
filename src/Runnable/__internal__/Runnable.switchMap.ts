import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  Containers,
  ObservableContainers,
  RunnableContainer,
} from "../../types.js";
import Runnable_switchAll from "./Runnable.switchAll.js";

const map: Containers.TypeClass<RunnableContainer>["map"] = Observable_map;

const Runnable_switchMap: ObservableContainers.TypeClass<RunnableContainer>["switchMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_switchAll);

export default Runnable_switchMap;
