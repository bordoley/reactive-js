import { ObservableContainer, ReactiveContainer } from "../../../core.js";
import Container_concatMap from "../../../core/Container/__internal__/Container.concatMap.js";
import Observable_map from "./Observable.map.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_mergeMap: ReactiveContainer.TypeClass<ObservableContainer>["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_mergeAll);

export default Observable_mergeMap;
