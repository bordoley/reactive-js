import {
  Containers,
  ReactiveContainers,
  RunnableContainer,
} from "../../../core.js";
import Container_concatMap from "../../../core/Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_mergeMap: ReactiveContainers.TypeClass<RunnableContainer>["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Containers.TypeClass<RunnableContainer>["map"],
    Runnable_mergeAll,
  );

export default Runnable_mergeMap;
