/// <reference types="./DeferredObservable.exhaustMap.d.ts" />

import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import DeferredObservable_exhaust from "./DeferredObservable.exhaust.js";
const map = Observable_map;
const DeferredObservable_exhaustMap = 
/*@__PURE__*/ Container_concatMap(map, DeferredObservable_exhaust);
export default DeferredObservable_exhaustMap;
