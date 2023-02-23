import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ExhaustMap, ObservableLike } from "../../../rx.js";
import Observable_exhaust from "./Observable.exhaust.js";
import Observable_map from "./Observable.map.js";

const Observable_exhaustMap: ExhaustMap<ObservableLike>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_exhaust);

export default Observable_exhaustMap;
