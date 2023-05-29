/// <reference types="./Observable.allAreDeferred.d.ts" />

import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose, isTrue } from "../../functions.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";
import Observable_isDeferred from "./Observable.isDeferred.js";
import Observable_map from "./Observable.map.js";
const Observable_allAreDeferred = /*@__PURE__*/ (() => compose(ReadonlyArray_toObservable(), Observable_map(Observable_isDeferred), Observable_everySatisfy(isTrue)))();
export default Observable_allAreDeferred;
