/// <reference types="./RunnableObservable.switchMap.d.ts" />

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import RunnableObservable_switchAll from "./RunnableObservable.switchAll.js";
// FIXME: add a real type for SwitchMap
const RunnableObservable_switchMap = 
/*@__PURE__*/ Container_concatMap(Observable_map, RunnableObservable_switchAll);
export default RunnableObservable_switchMap;
