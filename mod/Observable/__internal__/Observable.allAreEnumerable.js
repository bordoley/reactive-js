/// <reference types="./Observable.allAreEnumerable.d.ts" />

import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose, isTrue } from "../../functions.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_map from "./Observable.map.js";
const Observable_allAreEnumerable = /*@__PURE__*/ (() => compose(ReadonlyArray_toObservable(), Observable_map(Observable_isEnumerable), Observable_everySatisfy(isTrue)))();
export default Observable_allAreEnumerable;
