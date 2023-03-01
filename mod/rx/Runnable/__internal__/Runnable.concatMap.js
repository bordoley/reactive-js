/// <reference types="./Runnable.concatMap.d.ts" />

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
const map = Observable_map;
const Runnable_concatMap = 
/*@__PURE__*/ Container_concatMap(map, Runnable_concatAll);
export default Runnable_concatMap;
