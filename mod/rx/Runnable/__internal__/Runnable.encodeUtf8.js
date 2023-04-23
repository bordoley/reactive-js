/// <reference types="./Runnable.encodeUtf8.d.ts" />

import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Runnable_defer from "./Runnable.defer.js";
const map = Observable_map;
const Runnable_encodeUtf8 = 
/*@__PURE__*/ HigherOrderObservable_encodeUtf8(Runnable_defer, map);
export default Runnable_encodeUtf8;
