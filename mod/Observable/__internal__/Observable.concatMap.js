/// <reference types="./Observable.concatMap.d.ts" />

import Container_concatMap from "../../Container/__internal__/Container.concatMap.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";
// FIXME wrong typeclass
const Observable_concatMap = 
/*@__PURE__*/ Container_concatMap(Observable_map, Observable_concatAll);
export default Observable_concatMap;
