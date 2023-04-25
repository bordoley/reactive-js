import { Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { MergeMap, RunnableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_mergeMap: MergeMap<RunnableLike>["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Map<RunnableLike>["map"],
    Runnable_mergeAll,
  );

export default Runnable_mergeMap;
