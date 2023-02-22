/// <reference types="./Observable.switchMap.d.ts" />

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
// FIXME: add a real type for SwitchMap
const Observable_switchMap = 
/*@__PURE__*/ Container_concatMap(Observable_map, Observable_switchAll);
export default Observable_switchMap;
