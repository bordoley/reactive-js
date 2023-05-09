/// <reference types="./DeferredObservable.concatMap.d.ts" />

import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import DeferredObservable_concatAll from "./DeferredObservable.concatAll.js";
const map = Observable_map;
const DeferredObservable_concatMap = 
/*@__PURE__*/ Container_concatMap(map, DeferredObservable_concatAll);
export default DeferredObservable_concatMap;
