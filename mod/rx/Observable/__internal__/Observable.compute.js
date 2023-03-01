/// <reference types="./Observable.compute.d.ts" />

import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import Observable_map from "./Observable.map.js";
const Observable_compute = 
/*@__PURE__*/ Container_compute(ReadonlyArray_toRunnable, Observable_map);
export default Observable_compute;
