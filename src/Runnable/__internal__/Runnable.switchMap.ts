import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_switchAll from "./Runnable.switchAll.js";

const map: RunnableContainer.TypeClass["map"] = Observable_map;

const Runnable_switchMap: RunnableContainer.TypeClass["switchMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_switchAll);

export default Runnable_switchMap;
