/// <reference types="./Runnable.switchMap.d.ts" />

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_switchAll from "./Runnable.switchAll.js";
const Runnable_switchMap = 
/*@__PURE__*/ Container_concatMap(Observable_map, Runnable_switchAll);
export default Runnable_switchMap;
