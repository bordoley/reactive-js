import { Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ExhaustMap, RunnableContainerLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_exhaust from "./Runnable.exhaust.js";

const map: Map<RunnableContainerLike>["map"] = Observable_map;

const Runnable_exhaustMap: ExhaustMap<RunnableContainerLike>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_exhaust);

export default Runnable_exhaustMap;
