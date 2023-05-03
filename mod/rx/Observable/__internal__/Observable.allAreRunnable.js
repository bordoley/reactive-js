/// <reference types="./Observable.allAreRunnable.d.ts" />

import ReadonlyArray_everySatisfy from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
const Observable_allAreRunnable = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isRunnable), ReadonlyArray_everySatisfy(isTrue)))();
export default Observable_allAreRunnable;
