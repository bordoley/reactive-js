/// <reference types="./DeferredObservable.switchMap.d.ts" />

import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import DeferredObservable_switchAll from "./DeferredObservable.switchAll.js";
const map = Observable_map;
const DeferredObservable_switchMap = 
/*@__PURE__*/ Container_concatMap(map, DeferredObservable_switchAll);
export default DeferredObservable_switchMap;
