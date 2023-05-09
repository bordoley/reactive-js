import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  Containers,
  DeferredObservableContainer,
  ObservableContainers,
} from "../../containers.js";
import DeferredObservable_exhaust from "./DeferredObservable.exhaust.js";

const map: Containers.TypeClass<DeferredObservableContainer>["map"] =
  Observable_map;

const DeferredObservable_exhaustMap: ObservableContainers.TypeClass<DeferredObservableContainer>["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(map, DeferredObservable_exhaust);

export default DeferredObservable_exhaustMap;
