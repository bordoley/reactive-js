/// <reference types="./Observable.allAreEnumerable.d.ts" />

import { compose, isTrue } from "../../../functions.js";
import ReadonlyArray_every from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.every.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
const Observable_allAreEnumerable = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isEnumerable), ReadonlyArray_every(isTrue)))();
export default Observable_allAreEnumerable;
