/// <reference types="./Enumerable.concatMap.d.ts" />

import Container_concatMap from "../../../containers/Container/__internal__/Container.concatMap.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Enumerable_concatAll from "./Enumerable.concatAll.js";
const map = Observable_map;
const Enumerable_concatMap = 
/*@__PURE__*/ Container_concatMap(map, Enumerable_concatAll);
export default Enumerable_concatMap;
