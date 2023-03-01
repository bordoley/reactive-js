import { ConcatMap, Map } from "../../../containers.js";

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { RunnableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_concatAll from "./Runnable.concatAll.js";

const Runnable_concatMap: ConcatMap<RunnableLike>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Map<RunnableLike>["map"],
    Runnable_concatAll,
  );

export default Runnable_concatMap;
