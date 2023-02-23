import { Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ExhaustMap, RunnableObservableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import RunnableObservable_exhaust from "./RunnableObservable.exhaust.js";

const RunnableObservable_exhaustMap: ExhaustMap<RunnableObservableLike>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Map<RunnableObservableLike>["map"],
    RunnableObservable_exhaust,
  );

export default RunnableObservable_exhaustMap;
