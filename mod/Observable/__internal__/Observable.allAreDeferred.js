/// <reference types="./Observable.allAreDeferred.d.ts" />

import ReadonlyArray_everySatisfy from "../../ReadonlyArray/__internal__/ReadonlyArray.everySatisfy.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { compose, isTrue } from "../../functions.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
const Observable_allAreDeferred = /*@__PURE__*/ (() => compose(ReadonlyArray_map(Observable_isDeferred), ReadonlyArray_everySatisfy(isTrue)))();
export default Observable_allAreDeferred;
