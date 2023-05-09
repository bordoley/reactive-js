import {
  Containers,
  DeferredObservableContainer,
  ObservableContainers,
} from "../../../core.js";
import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import DeferredObservable_mergeAll from "./DeferredObservable.mergeAll.js";

const DeferredObservable_mergeMap: ObservableContainers.TypeClass<DeferredObservableContainer>["mergeMap"] =
  /*@__PURE__*/ Container_concatMap(
    Observable_map as Containers.TypeClass<DeferredObservableContainer>["map"],
    DeferredObservable_mergeAll,
  );

export default DeferredObservable_mergeMap;
