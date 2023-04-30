import { ConcatMap, Map } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { RunnableContainerLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_concatAll from "./Runnable.concatAll.js";

const map: Map<RunnableContainerLike>["map"] = Observable_map;

const Runnable_concatMap: ConcatMap<RunnableContainerLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, Runnable_concatAll);

export default Runnable_concatMap;
