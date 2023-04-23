/// <reference types="./Observable.allAreRunnable.d.ts" />

import { compose, isTrue } from "../../../functions.js";
import ReadonlyArray_everySatisfy from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
const Observable_allAreRunnable = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isRunnable), ReadonlyArray_everySatisfy(isTrue)))();
export default Observable_allAreRunnable;
