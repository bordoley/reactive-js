/// <reference types="./Observable.mergeAll.d.ts" />

import Observer_createMergeAllObserverOperator from "../../Observer/__internal__/Observer.createMergeAllObserverOperator.js";
import { compose } from "../../functions.js";
import Observable_liftDeferredObservableUpperBounded from "./Observable.liftDeferredObservableUpperBounded.js";
const Observable_mergeAll = 
/*@__PURE__*/ compose(Observer_createMergeAllObserverOperator, Observable_liftDeferredObservableUpperBounded);
export default Observable_mergeAll;
