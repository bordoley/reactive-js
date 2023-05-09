import {
  Containers,
  DeferredContainers,
  DeferredObservableContainer,
} from "../../../core.js";

import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import DeferredObservable_concatAll from "./DeferredObservable.concatAll.js";

const map: Containers.TypeClass<DeferredObservableContainer>["map"] =
  Observable_map;

const DeferredObservable_concatMap: DeferredContainers.TypeClass<DeferredObservableContainer>["concatMap"] =
  /*@__PURE__*/ Container_concatMap(map, DeferredObservable_concatAll);

export default DeferredObservable_concatMap;
