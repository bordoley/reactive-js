/// <reference types="./Observable.allAreEnumerable.d.ts" />

import ReadonlyArray_everySatisfy from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../../functions.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
const Observable_allAreEnumerable = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isEnumerable), ReadonlyArray_everySatisfy(isTrue)))();
export default Observable_allAreEnumerable;
