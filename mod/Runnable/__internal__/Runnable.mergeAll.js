/// <reference types="./Runnable.mergeAll.d.ts" />

import Observable_liftRunnableUpperBounded from "../../Observable/__internal__/Observable.liftRunnableUpperBounded.js";
import Observer_createMergeAllObserverOperator from "../../Observer/__internal__/Observer.createMergeAllObserverOperator.js";
import { compose } from "../../functions.js";
const Runnable_mergeAll = /*@__PURE__*/ compose(Observer_createMergeAllObserverOperator, Observable_liftRunnableUpperBounded);
export default Runnable_mergeAll;
