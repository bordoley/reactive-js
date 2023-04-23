/// <reference types="./Observable.encodeUtf8.d.ts" />

import HigherOrderObservable_encodeUtf8 from "../../HigherOrderObservable/__internal__/HigherOrderObservable.encodeUtf8.js";
import Observable_defer from "./Observable.defer.js";
import Observable_map from "./Observable.map.js";
const Observable_encodeUtf8 = 
/*@__PURE__*/ HigherOrderObservable_encodeUtf8(Observable_defer, Observable_map);
export default Observable_encodeUtf8;
