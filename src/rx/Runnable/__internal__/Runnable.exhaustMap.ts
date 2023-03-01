import { Map } from "../../../containers.js";
import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ExhaustMap, RunnableLike } from "../../../rx.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_exhaust from "./Runnable.exhaust.js";

const Runnable_exhaustMap: ExhaustMap<RunnableLike>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Map<RunnableLike>["map"],
    Runnable_exhaust,
  );

export default Runnable_exhaustMap;
