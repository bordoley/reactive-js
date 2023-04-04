/// <reference types="./Observable.allAreRunnable.d.ts" />

import { compose, isTrue } from "../../../functions.js";
import ReadonlyArray_every from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
const Observable_allAreRunnable = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isRunnable), ReadonlyArray_every(isTrue)))();
export default Observable_allAreRunnable;
