/// <reference types="./Observable.compute.d.ts" />

import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import Optional_toObservable from "../../../containers/Optional/Optional_toObservable.js";
import Observable_map from "./Observable.map.js";
const Observable_compute = /*@__PURE__*/ Container_compute(Optional_toObservable, Observable_map);
export default Observable_compute;
