/// <reference types="./Observable.pairwise.d.ts" />

import Observer_createPairwiseObserver from "../../Observer/__internal__/Observer.createPairwiseObserver.js";
import { pipe, returns } from "../../functions.js";
import Observable_liftEnumerableUpperBounded from "./Observable.liftEnumerableUpperBounded.js";
const Observable_pairwise = 
/*@__PURE__*/ (() => pipe(Observer_createPairwiseObserver, Observable_liftEnumerableUpperBounded, returns))();
export default Observable_pairwise;
