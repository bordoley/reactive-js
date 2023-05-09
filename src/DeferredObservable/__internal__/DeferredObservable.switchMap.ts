import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import {
  Containers,
  DeferredObservableContainer,
  ObservableContainers,
} from "../../containers.js";
import DeferredObservable_switchAll from "./DeferredObservable.switchAll.js";

const map: Containers.TypeClass<DeferredObservableContainer>["map"] =
  Observable_map;

const DeferredObservable_switchMap: ObservableContainers.TypeClass<DeferredObservableContainer>["switchMap"] =
  /*@__PURE__*/ Container_concatMap(map, DeferredObservable_switchAll);

export default DeferredObservable_switchMap;
