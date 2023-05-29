/// <reference types="./Observable.allArePure.d.ts" />

import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { compose, isTrue } from "../../functions.js";
import Observable_everySatisfy from "./Observable.everySatisfy.js";
import Observable_isPure from "./Observable.isPure.js";
import Observable_map from "./Observable.map.js";
const Observable_allArePure = /*@__PURE__*/ (() => compose(ReadonlyArray_toObservable(), Observable_map(Observable_isPure), Observable_everySatisfy(isTrue)))();
export default Observable_allArePure;
