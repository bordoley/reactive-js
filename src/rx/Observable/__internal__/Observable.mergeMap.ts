import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import { ObservableContainer, Reactive } from "../../../rx.js";
import Observable_map from "./Observable.map.js";
import Observable_mergeAll from "./Observable.mergeAll.js";

const Observable_mergeMap: Reactive.MergeMap<ObservableContainer>["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(Observable_map, Observable_mergeAll);

export default Observable_mergeMap;
