import { Container } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { Reactive, RunnableContainer } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";

const Runnable_mergeMap: Reactive.MergeMap<RunnableContainer>["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Container.Map<RunnableContainer>["map"],
    Runnable_mergeAll,
  );

export default Runnable_mergeMap;
