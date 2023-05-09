import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { RunnableContainer } from "../../containers.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_mergeMap: RunnableContainer.TypeClass["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as RunnableContainer.TypeClass["map"],
    Runnable_mergeAll,
  );

export default Runnable_mergeMap;
