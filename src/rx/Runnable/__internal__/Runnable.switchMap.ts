import { Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { RunnableContainerLike, SwitchMap } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_switchAll from "./Runnable.switchAll.js";

const map: Map<RunnableContainerLike>["map"] = Observable_map;

const Runnable_switchMap: SwitchMap<RunnableContainerLike>["switchMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_switchAll);

export default Runnable_switchMap;
