/// <reference types="./Observable.compute.d.ts" />

import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { isSome, none } from "../../../functions.js";
import Observable_map from "./Observable.map.js";
const Observable_compute = /*@__PURE__*/ Container_compute((options) => ReadonlyArray_toObservable(isSome(options)
    ? { ...options, ...(isSome(options.delay) ? { delayStart: true } : {}) }
    : none), Observable_map);
export default Observable_compute;
