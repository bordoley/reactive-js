/// <reference types="./Enumerable.encodeUtf8.d.ts" />

import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Enumerable_defer from "./Enumerable.defer.js";
const map = Observable_map;
const Enumerable_encodeUtf8 = 
/*@__PURE__*/ HigherOrderObservable_encodeUtf8(Enumerable_defer, map);
export default Enumerable_encodeUtf8;
