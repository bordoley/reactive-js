import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { DeferredObservableContainer } from "../../containers.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_mergeMap: DeferredObservableContainer.TypeClass["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as DeferredObservableContainer.TypeClass["map"],
    DeferredObservable_mergeAll,
  );

export default DeferredObservable_mergeMap;
