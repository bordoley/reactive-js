import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { DeferredObservableContainer } from "../../containers.js";
import DeferredObservable_exhaust from "./DeferredObservable.exhaust.js";

const map: DeferredObservableContainer.TypeClass["map"] = Observable_map;

const DeferredObservable_exhaustMap: DeferredObservableContainer.TypeClass["exhaustMap"] =
  /*@__PURE__*/ Container_concatMap(map, DeferredObservable_exhaust);

export default DeferredObservable_exhaustMap;
